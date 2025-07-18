import { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 flex items-center justify-center text-white">
      <div className="bg-black p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2">Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="input" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="input" />
        <button onClick={handleLogin} className="btn-primary">Login</button>
        <div className="text-center text-gray-400 my-2">OR</div>
        <button onClick={handleGoogle} className="btn-google">Continue with Google</button>
        <p className="mt-4 text-sm text-center">Don't have an account? <Link to="/register" className="text-blue-400">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
