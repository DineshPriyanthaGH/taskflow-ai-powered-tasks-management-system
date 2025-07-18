import { Link } from "react-router-dom";
import { CalendarCheck2, MessageCircle, ShieldCheck } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white flex flex-col relative">
      {/* Top Right Auth Links */}
      <div className="absolute top-4 right-6 space-x-4">
        <Link to="/login" className="text-white hover:text-gray-300 font-medium">
          Login
        </Link>
        <Link to="/register" className="bg-white text-blue-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
          Sign Up
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text">
          AI-Powered Task Management
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          Manage your tasks with smart scheduling, natural conversations, and secure real-time syncing.
        </p>
        <Link to="/register" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all">
          Get Started
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 bg-gray-900 rounded-t-3xl shadow-inner">
        <div className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transition transform">
          <CalendarCheck2 className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
          <p className="text-gray-300 text-sm">
            Automatically organize your day with AI-powered task suggestions and reminders.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transition transform">
          <MessageCircle className="w-12 h-12 mx-auto text-green-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Conversation Chat</h3>
          <p className="text-gray-300 text-sm">
            Chat with your assistant to manage tasks just like talking to a teammate.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transition transform">
          <ShieldCheck className="w-12 h-12 mx-auto text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure Real-Time Sync</h3>
          <p className="text-gray-300 text-sm">
            Your data is encrypted and instantly synced across devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
