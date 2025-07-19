import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

console.log("Starting Taskflow AI application...");

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  console.log("Root element found, creating React root...");
  const root = ReactDOM.createRoot(rootElement);
  
  console.log("Rendering App component...");
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log("App rendered successfully");
} catch (error) {
  console.error("Failed to start application:", error);
  const rootEl = document.getElementById("root");
  if (rootEl) {
    rootEl.innerHTML = `
      <div style="padding: 20px; background: #ff4444; color: white; font-family: Arial, sans-serif;">
        <h2>Application Error</h2>
        <p>Failed to start Taskflow AI: ${error.message}</p>
        <p>Check the browser console for more details.</p>
      </div>
    `;
  }
}
