import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // 🔹 Replace this with your admin login API
      console.log("Admin Login Data:", formData);
      alert("Admin Login Successful!");
      navigate("/admin-dashboard");
    } catch (err) {
      setError("Login failed. Please check credentials.");
    }
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">
      {/* Left section - form */}
      <div className="flex flex-col justify-center w-full md:w-[50%] px-8 md:px-16 lg:px-24 bg-white">
        <div className="flex flex-col bg-white pl-4 md:pl-10 pt-4">
          <div className="flex items-center">
            <img
              src="assets/logo.png"
              alt="College Connect Logo"
              className="w-10 h-10 object-contain mr-3"
            />
            <h1 className="text-3xl font-bold text-blue-600">
              College Connect
            </h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-6">
            Admin Sign In
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 max-w-md mx-auto w-full"
        >
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Admin Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter admin email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full mt-2 bg-blue-600 text-white py-2.5 rounded-md font-semibold hover:bg-blue-700 transition-all"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-600 mt-3">
            New Admin?{" "}
            <span
              onClick={() => navigate("/admin-signup")}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Create Account
            </span>
          </p>
        </form>
      </div>

      {/* Right section - image */}
      <div className="hidden md:flex w-[70%] bg-gradient-to-br from-blue-100 to-blue-50 items-center justify-center relative overflow-visible">
        <img
          src="assets/signupimage1.png"
          alt="Admin Illustration"
          className="w-4/5 rounded-2xl shadow-2xl object-cover border-3 border-black absolute right-[-40px]"
        />
      </div>
    </div>
  );
};

export default AdminSignIn;
