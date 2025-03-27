import { useState } from "react";

const UserDashboard = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Passionate developer and lifelong learner.",
    profilePicture: "https://via.placeholder.com/150",
  });

  const [editing, setEditing] = useState(false);
  const [newUser, setNewUser] = useState({ ...user });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setNewUser((prev) => ({ ...prev, profilePicture: imageUrl }));
    }
  };

  const handleSave = () => {
    setUser(newUser);
    setEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center">User Dashboard</h1>
        <div className="flex justify-center mt-4">
          <label className="relative cursor-pointer">
            <img
              src={newUser.profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border"
            />
            {editing && (
              <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            )}
          </label>
        </div>

        <div className="mt-4">
          <label className="block text-gray-600 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-lg"
            value={newUser.name}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-600 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg"
            value={newUser.email}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-600 font-medium">Bio</label>
          <textarea
            name="bio"
            className="w-full px-4 py-2 border rounded-lg"
            rows={3}
            value={newUser.bio}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>

        <div className="mt-6 flex justify-between">
          {editing ? (
            <>
              <button className="px-4 py-2 bg-gray-500 text-white rounded-lg" onClick={() => setEditing(false)}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={handleSave}>
                Save
              </button>
            </>
          ) : (
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full" onClick={() => setEditing(true)}>
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;