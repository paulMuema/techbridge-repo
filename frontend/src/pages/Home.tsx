import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* Add Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
          Welcome to <span className="text-blue-600">TechBridge</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 md:text-xl">
          Learn, Share, and Grow with Developers Around the World!
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex space-x-4">
          <Link
            to="/signup"
            className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="rounded-lg border border-blue-600 px-6 py-3 text-lg font-semibold text-blue-600 shadow-lg transition hover:bg-blue-100"
          >
            Login
          </Link>
        </div>

        {/* Image Section */}
        <div className="mt-10">
          <img
            src="/assets/landing.svg"
            alt="TechBridge Community"
            className="w-full max-w-lg drop-shadow-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;