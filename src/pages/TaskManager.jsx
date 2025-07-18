import React, { useEffect, useState } from 'react';
import { auth, database } from '../firebase';
import { ref, push, update, remove, onValue } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

const TaskManager = () => {
  const [tasks, setTasks] = useState({});
  const [form, setForm] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium',
    assignee: '',
    status: 'pending',
    createdAt: new Date().toISOString()
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login');
      } else {
        setLoading(false);
        const tasksRef = ref(database, 'tasks/' + user.uid);
        const tasksUnsubscribe = onValue(tasksRef, (snapshot) => {
          setTasks(snapshot.val() || {});
        });
        
        return () => tasksUnsubscribe();
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setForm({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Medium',
      assignee: '',
      status: 'pending',
      createdAt: new Date().toISOString()
    });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.description) {
      alert('Please fill in title and description');
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      navigate('/login');
      return;
    }

    const taskData = {
      ...form,
      completed: false,
      createdAt: new Date().toISOString()
    };

    try {
      if (editingId) {
        await update(ref(database, `tasks/${user.uid}/${editingId}`), taskData);
      } else {
        await push(ref(database, 'tasks/' + user.uid), taskData);
      }
      resetForm();
    } catch (error) {
      console.error('Error saving task:', error);
      alert('Error saving task. Please try again.');
    }
  };

  const handleEdit = (id) => {
    setEditingId(id);
    setForm(tasks[id]);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const user = auth.currentUser;
      if (!user) {
        navigate('/login');
        return;
      }

      try {
        await remove(ref(database, `tasks/${user.uid}/${id}`));
        if (editingId === id) resetForm();
      } catch (error) {
        console.error('Error deleting task:', error);
        alert('Error deleting task. Please try again.');
      }
    }
  };

  const formatDateForInput = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="task-manager min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/dashboard')}
          className="mb-6 px-4 py-2 bg-black rounded-md hover:bg-gray-800 transition-colors"
        >
          ← Back to Dashboard
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Create Task Form */}
          <div className="bg-black p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Create New Task</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="title"
                  placeholder="What needs to be done?"
                  className="w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={form.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="description"
                  placeholder="Add details about the task"
                  className="w-full p-3 bg-gray-800 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={form.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formatDateForInput(form.dueDate)}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Priority</label>
                  <select
                    name="priority"
                    className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={form.priority}
                    onChange={handleChange}
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  name="assignee"
                  placeholder="Who should do this task?"
                  className="w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={form.assignee}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 py-3 rounded-md hover:bg-purple-700 transition-colors font-medium"
              >
                {editingId ? 'Update Task' : 'Create Task'}
              </button>
            </form>
          </div>

          {/* Added Tasks List */}
          <div className="bg-black p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Added Tasks</h2>
            
            {Object.keys(tasks).length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                <p>No tasks added yet.</p>
                <p className="mt-2">Create your first task using the form</p>
              </div>
            ) : (
              <ul className="space-y-3 max-h-[500px] overflow-y-auto">
                {Object.entries(tasks).map(([id, task]) => (
                  <li
                    key={id}
                    className={`p-4 rounded-md cursor-pointer ${
                      task.completed ? 'bg-gray-800' : 'bg-gray-900 hover:bg-gray-800'
                    } ${editingId === id ? 'ring-2 ring-purple-500' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={task.completed || false}
                          onChange={() => {
                            const user = auth.currentUser;
                            if (user) {
                              update(ref(database, `tasks/${user.uid}/${id}`), {
                                completed: !task.completed,
                                status: task.completed ? 'pending' : 'completed'
                              });
                            }
                          }}
                          className="mr-3 h-5 w-5 rounded focus:ring-purple-500"
                        />
                        <h3 className={`font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
                          {task.title}
                        </h3>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(id)}
                          className="text-blue-400 hover:text-blue-300 text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(id)}
                          className="text-red-500 hover:text-red-400 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p className={`text-sm ml-8 ${task.completed ? 'text-gray-500' : 'text-gray-300'}`}>
                      {task.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3 ml-8 text-xs">
                      {task.dueDate && (
                        <span className="bg-gray-700 px-2 py-1 rounded">
                          Due: {new Date(task.dueDate).toLocaleDateString()}
                        </span>
                      )}
                      {task.assignee && (
                        <span className="bg-gray-700 px-2 py-1 rounded">
                          Assignee: {task.assignee}
                        </span>
                      )}
                      <span
                        className={`px-2 py-1 rounded ${
                          task.priority === 'High'
                            ? 'bg-red-500 text-white'
                            : task.priority === 'Medium'
                            ? 'bg-yellow-500 text-black'
                            : 'bg-green-500 text-white'
                        }`}
                      >
                        {task.priority} Priority
                      </span>
                      <span
                        className={`px-2 py-1 rounded ${
                          task.status === 'completed'
                            ? 'bg-green-500 text-white'
                            : task.status === 'in-progress'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-500 text-white'
                        }`}
                      >
                        {task.status || 'pending'}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;