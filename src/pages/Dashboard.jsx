import React, { useEffect, useState } from 'react';
import { auth, database } from '../firebase';
import { ref, onValue, update } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Dashboard = () => {
  const [tasks, setTasks] = useState({});
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAccepting, setIsAccepting] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const navigate = useNavigate();



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login');
      } else {
        setAuthLoading(false);
        const tasksRef = ref(database, 'tasks/' + user.uid);
        const tasksUnsubscribe = onValue(tasksRef, (snapshot) => {
          const data = snapshot.val() || {};
          setTasks(data);
        });
        
        return () => tasksUnsubscribe();
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Calculate task statistics
  const totalTasks = Object.keys(tasks).length;
  const completedTasks = Object.values(tasks).filter(t => t.completed).length;
  const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  // Get the most recent task that needs action
  const getActionTask = () => {
    const taskList = Object.entries(tasks).map(([id, task]) => ({ id, ...task }));
    return taskList
      .filter(task => !task.completed && (!task.status || task.status === 'pending'))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
  };

  const actionTask = getActionTask();

  // Handle accepting a task
  const handleAcceptTask = async (taskId) => {
    if (!taskId) return;
    
    setIsAccepting(true);
    try {
      const user = auth.currentUser;
      if (user) {
        const taskRef = ref(database, `tasks/${user.uid}/${taskId}`);
        await update(taskRef, {
          status: 'in-progress',
          acceptedAt: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error('Error accepting task:', error);
    } finally {
      setIsAccepting(false);
    }
  };

  // Handle AI chat
// ✅ AI submit handler
const handleChatSubmit = async (e) => {
  e.preventDefault();
  const userInput = chatInput.trim();
  if (!userInput) return;

  setChatMessages(prev => [...prev, { sender: 'user', content: userInput }]);
  setChatInput('');
  setIsLoading(true);

  try {
 const serializedTasks = Object.values(tasks).map((task, i) => (
  `Task ${i + 1}:
- Title: ${task.title}
- Description: ${task.description}
- Status: ${task.status || 'pending'}
- Priority: ${task.priority}
- Assignee: ${task.assignee}
- Completed: ${task.completed ? 'Yes' : 'No'}`
)).join('\n\n');


    const fullPrompt = `
You are a helpful assistant for a task manager app. Reply only with task-related answers based on this data.

${serializedTasks}

User query: "${userInput}"
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDCpPTfFoOuTDnc57hbfYGY7PKZHyyZ3iQ`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: fullPrompt }] }]
        })
      }
    );

    const data = await response.json();

    const aiText = data?.candidates?.[0]?.content?.parts
      ?.map(part => part.text)
      ?.join('') || 'Sorry, I could not process your request.';

    setChatMessages(prev => [...prev, { sender: 'ai', content: aiText }]);
  } catch (err) {
    console.error('AI Error:', err);
    setChatMessages(prev => [
      ...prev,
      { sender: 'ai', content: 'Something went wrong. Please try again later.' }
    ]);
  } finally {
    setIsLoading(false);
  }
};

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  ///////////////////////////// ------gemini APi ----------//////////////////////////////////////////////

  

  return (
    <div className="dashboard min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">TaskFlow AI</h1>
            <p className="text-gray-300">Welcome back, {auth.currentUser?.email}</p>
          </div>
          <div className="flex space-x-4">
            <button
              className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
              onClick={() => navigate('/tasks')}
            >
              + Add Task
            </button>
            <button
              className="bg-black px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
              onClick={() => auth.signOut().then(() => navigate('/login'))}
            >
              Sign Out
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black p-4 rounded-lg">
            <h3 className="text-gray-300 font-medium">Total Tasks</h3>
            <p className="text-3xl font-bold">{totalTasks}</p>
          </div>
          <div className="bg-black p-4 rounded-lg">
            <h3 className="text-gray-300 font-medium">Completed</h3>
            <p className="text-3xl font-bold text-green-400">{completedTasks}</p>
          </div>
          <div className="bg-black p-4 rounded-lg">
            <h3 className="text-gray-300 font-medium">Progress</h3>
            <div className="flex items-center space-x-2">
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-purple-600 h-2.5 rounded-full" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="text-xl font-bold">{progress}%</span>
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-6">
          <section className="bg-black p-6 rounded-lg lg:w-2/3">
            <h2 className="text-xl font-bold mb-4">Recent Tasks</h2>
            {Object.keys(tasks).length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                <p>No tasks found</p>
                <button
                  className="mt-4 bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700"
                  onClick={() => navigate('/tasks')}
                >
                  Create Your First Task
                </button>
              </div>
            ) : (
              <ul className="space-y-3">
                {Object.entries(tasks)
                  .sort(([,a], [,b]) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map(([id, task]) => (
                    <li
                      key={id}
                      className={`p-4 rounded-md cursor-pointer ${
                        task.completed ? 'bg-gray-800' : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className={`font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
                          {task.title}
                        </h3>
                        {task.completed ? (
                          <span className="text-green-400 text-sm">✓ Completed</span>
                        ) : (
                          <button
                            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/complete-task/${id}`);
                            }}
                          >
                            Mark Complete
                          </button>
                        )}
                      </div>
                      <p className={`text-sm mb-3 ${task.completed ? 'text-gray-500' : 'text-gray-300'}`}>
                        {task.description}
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
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
          </section>

          <section className="bg-black p-6 rounded-lg lg:w-1/3 space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-3">Action</h2>
              {actionTask ? (
                <div className="bg-gray-900 p-4 rounded-md">
                  <h3 className="font-medium mb-1">{actionTask.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">{actionTask.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs mb-3">
                    {actionTask.dueDate && (
                      <span className="bg-gray-800 px-2 py-1 rounded">
                        Due: {new Date(actionTask.dueDate).toLocaleDateString()}
                      </span>
                    )}
                    {actionTask.assignee && (
                      <span className="bg-gray-800 px-2 py-1 rounded">
                        Assignee: {actionTask.assignee}
                      </span>
                    )}
                    <span
                      className={`px-2 py-1 rounded ${
                        actionTask.priority === 'High'
                          ? 'bg-red-500 text-white'
                          : actionTask.priority === 'Medium'
                          ? 'bg-yellow-500 text-black'
                          : 'bg-green-500 text-white'
                      }`}
                    >
                      {actionTask.priority} Priority
                    </span>
                  </div>
                  <button
                    onClick={() => handleAcceptTask(actionTask.id)}
                    disabled={isAccepting}
                    className={`w-full py-2 rounded-md text-sm font-medium ${
                      isAccepting ? 'bg-gray-600' : 'bg-green-600 hover:bg-green-700'
                    }`}
                  >
                    {isAccepting ? 'Accepting...' : 'Accept Task'}
                  </button>
                </div>
              ) : (
                <div className="bg-gray-900 p-4 rounded-md text-center text-gray-400">
                  No tasks requiring immediate action
                </div>
              )}
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">AI Assistant</h2>
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-300 mb-4">
                  Start a conversation with your AI assistant! Ask about your tasks, schedule, or get productivity tips.
                </p>
                
                <div className="chat-messages h-64 overflow-y-auto mb-4 bg-gray-800 rounded-lg p-3">
                  {chatMessages.length === 0 ? (
                    <p className="text-gray-400 text-center mt-16">Ask your AI assistant anything...</p>
                  ) : (
                    chatMessages.map((msg, i) => (
                      <div 
                        key={i} 
                        className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
                      >
                        <div className={`inline-block max-w-xs p-3 rounded-lg text-sm ${
                          msg.sender === 'user' ? 'bg-purple-600' : 'bg-gray-700'
                        }`}>
                          {msg.content}
                        </div>
                      </div>
                    ))
                  )}
                  {isLoading && (
                    <div className="text-center text-gray-400 py-2">
                      <div className="inline-flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  )}
                </div>
                
                <form onSubmit={handleChatSubmit} className="flex">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-1 bg-gray-800 text-white p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 px-4 py-3 rounded-r-lg hover:bg-purple-700 transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? '...' : 'Send'}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;