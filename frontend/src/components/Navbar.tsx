import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white px-6 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">TechBridge</h1>
      <div className="flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/resources" className="text-gray-700 hover:text-blue-600">Resources</Link>
        <Link to="/login" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;