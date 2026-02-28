import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600
                    animate-gradient-x p-4">
      
      <div className="w-full max-w-md bg-gray-900 dark:bg-gray-800 rounded-3xl p-8
                      shadow-[0_0_25px_rgba(0,255,255,0.4)] backdrop-blur-sm
                      border border-transparent hover:border-white transition-all">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Smart Grocery Manager
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-800 text-white placeholder-gray-400 border-none focus:ring-2 focus:ring-blue-400"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-800 text-white placeholder-gray-400 border-none focus:ring-2 focus:ring-blue-400"
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
                       hover:scale-105 transition-transform text-white font-semibold"
          >
            Login
          </Button>
        </form>

        <p className="text-gray-300 mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;