import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic form validation
    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Simulate login success
    setSuccess("Login successful! Backend connection coming soon 🚀");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <motion.div 
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Log in to Your Account</h2>

        {error && <p className="mb-4 rounded bg-red-100 p-2 text-center text-red-600">{error}</p>}
        {success && <p className="mb-4 rounded bg-green-100 p-2 text-center text-green-600">{success}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mb-3 w-full rounded-lg border px-4 py-2"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="mb-4 w-full rounded-lg border px-4 py-2"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;