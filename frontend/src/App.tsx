import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import Navbar from "./components/Navbar";
import Resources from "./pages/resources";
import ResourceDetails from "./pages/ResourceDetails";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* Navbar displayed on all pages */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:id" element={<UserDashboard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:id" element={<ResourceDetails />} />
      </Routes>
    </div>
  );
};

export default App;