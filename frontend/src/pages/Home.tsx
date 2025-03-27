import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        {/* Title */}
        <motion.h1
          className="text-4xl font-extrabold text-gray-900 md:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-blue-600">TechBridge</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg text-gray-700 md:text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Learn, Share, and Grow with Developers Around the World! 🚀
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="mt-8 flex flex-col md:flex-row gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            to="/signup"
            className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-transform duration-300 hover:bg-blue-700 hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="rounded-lg border border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-transform duration-300 hover:bg-blue-100 hover:scale-105"
          >
            Login
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <img
            src="/assets/landing.svg"
            alt="TechBridge Community"
            className="w-full max-w-lg drop-shadow-lg"
          />
        </motion.div>
      </main>
    </div>
  );
};

export default Home;