import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaStar } from "react-icons/fa";

const resourcesData = [
  {
    id: 1,
    title: "Mastering React",
    description: "A complete guide to React.js for beginners.",
    author: "John Doe",
    rating: 4.5,
    category: "Web Development",
  },
  {
    id: 2,
    title: "Python for Data Science",
    description: "Learn data science with Python from scratch.",
    author: "Jane Smith",
    rating: 4.7,
    category: "Data Science",
  },
  {
    id: 3,
    title: "Machine Learning Basics",
    description: "Introduction to Machine Learning algorithms.",
    author: "Alice Brown",
    rating: 4.3,
    category: "AI & ML",
  },
];

const Resources = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredResources = resourcesData.filter((resource) =>
    (filter === "All" || resource.category === filter) &&
    resource.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Explore Resources</h1>
        
        {/* Search & Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="relative w-full md:w-1/2">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="mt-4 md:mt-0 border px-4 py-2 rounded-lg shadow-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Web Development</option>
            <option>Data Science</option>
            <option>AI & ML</option>
          </select>
        </div>

        {/* Resource List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">{resource.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{resource.description}</p>
              <p className="text-gray-500 text-sm mt-2">By {resource.author}</p>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-500" />
                <span className="ml-1 text-gray-700">{resource.rating}</span>
              </div>
              <Link
                to={`/resources/${resource.id}`}
                className="mt-3 inline-block text-blue-600 font-semibold hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;