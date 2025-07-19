import { useState } from "react";
import { auth, provider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) return alert("Passwords do not match");
    try {
      if (!auth) {
        alert("Firebase authentication is not available. Please refresh the page.");
        return;
      }
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      if (!auth || !provider) {
        alert("Firebase authentication is not available. Please refresh the page.");
        return;
      }
      await signInWithPopup(auth, provider);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 flex items-center justify-center text-white">
      <div className="bg-black p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2">Create Account</h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="input" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="input" />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="input" />
        <button onClick={handleRegister} className="btn-primary">Register</button>
        <div className="text-center text-gray-400 my-2">OR</div>
        <button onClick={handleGoogle} className="btn-google">Continue with Google</button>
        <p className="mt-4 text-sm text-center">Already have an account? <Link to="/login" className="text-blue-400">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
