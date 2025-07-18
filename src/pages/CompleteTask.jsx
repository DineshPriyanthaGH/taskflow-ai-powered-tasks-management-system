import React, { useState, useEffect } from 'react';
import { auth, database, storage } from '../firebase';
import { ref as dbRef, get, update } from 'firebase/database';
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate, useParams } from 'react-router-dom';

const CompleteTask = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const user = auth.currentUser;

  const [task, setTask] = useState(null);
  const [notes, setNotes] = useState('');
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchTask = async () => {
      try {
        const taskSnapshot = await get(dbRef(database, `tasks/${user.uid}/${taskId}`));
        if (taskSnapshot.exists()) {
          setTask(taskSnapshot.val());
        } else {
          setError('Task not found');
        }
      } catch (err) {
        setError('Failed to load task');
        console.error(err);
      }
    };

    fetchTask();
  }, [user, taskId, navigate]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const validTypes = [
        'application/pdf',
        'image/jpeg',
        'image/png',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];

      if (!validTypes.includes(selectedFile.type)) {
        setError('Invalid file type. Please upload PDF, JPG, PNG, or DOC files.');
        return;
      }

      if (selectedFile.size > 5 * 1024 * 1024) {
        setError('File size should be less than 5MB');
        return;
      }

      setFile(selectedFile);
      setError('');
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!notes.trim() || notes.trim().length < 10) {
    setError('Please add at least 10 characters in completion notes');
    return;
  }
  
  if (!user) {
    setError('User not authenticated');
    return;
  }

  setIsSubmitting(true);
  setError('');
  setUploadProgress(0);

  try {
    let proofUrl = task?.proofUrl || '';

    if (file) {
    // Upload file and get URL
      proofUrl = await uploadFileAndGetURL(file, user.uid, taskId);
    } else {
      // No file uploaded, so proofUrl remains as is (empty or previous)
      proofUrl = '';
    }

    // Now update database (file uploaded or not)
    await update(dbRef(database, `tasks/${user.uid}/${taskId}`), {
      completed: true,
      completionNotes: notes.trim(),
      proofUrl: proofUrl,
      completedAt: new Date().toISOString(),
      status: 'completed'
    });

    // Redirect with success message
    navigate('/dashboard', {
      state: {
        message: 'Task completed successfully!',
        alertType: 'success'
      }
    });
  } catch (error) {
    console.error('Submission error:', error);
    setError(error.message || 'Failed to complete task. Please try again.');
  } finally {
    setIsSubmitting(false);
    setUploadProgress(0);
  }
};
const uploadFileAndGetURL = (file, userId, taskId) => {
  return new Promise((resolve, reject) => {
    const fileRef = storageRef(storage, `task-proofs/${userId}/${taskId}/${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on('state_changed', 
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(Math.round(progress));
      }, 
      error => reject(error),
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (err) {
          reject(err);
        }
      }
    );
  });
};

  if (!task) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center text-white">
        <div className="text-center">
          {error ? (
            <>
              <p className="text-red-500 mb-4">{error}</p>
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-black px-4 py-2 rounded hover:bg-gray-800 transition-colors"
              >
                Back to Dashboard
              </button>
            </>
          ) : (
            <p>Loading task details...</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate('/dashboard')}
          className="mb-6 bg-black px-4 py-2 rounded hover:bg-gray-800 transition-colors"
        >
          ← Back to Dashboard
        </button>

        <div className="bg-black rounded-lg p-6 shadow-lg">
          <h1 className="text-2xl font-bold mb-2">Complete Task: {task.title}</h1>
          <p className="text-gray-300 mb-6">{task.description}</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2 font-medium">Completion Notes *</label>
              <textarea
                className="w-full p-3 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Describe how you completed this task..."
                rows="4"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                required
                minLength={10}
              />
              <p className="text-xs text-gray-400 mt-1">Minimum 10 characters required</p>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2 font-medium">Upload Proof (Optional)</label>
              <div className="flex items-center">
                <label className="cursor-pointer bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md transition-colors">
                  <span>{file ? file.name : 'Choose File'}</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                </label>
                {file && (
                  <button
                    type="button"
                    onClick={() => setFile(null)}
                    className="ml-2 text-red-500 hover:text-red-400"
                  >
                    Remove
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-1">Supported formats: PDF, DOC/DOCX, JPG/PNG (Max 5MB)</p>

              {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="mt-2">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-300 mt-1">Uploading: {uploadProgress}%</p>
                </div>
              )}
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-900/50 text-red-300 rounded-md text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-md font-medium ${
                isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
              } transition-colors`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {file ? 'Uploading and Submitting...' : 'Submitting...'}
                </span>
              ) : (
                'Mark as Completed'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;