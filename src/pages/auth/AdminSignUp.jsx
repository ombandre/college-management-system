import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { registerAdmin } from "../../services/authService";

const AdminSignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    coCode: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      coCode: formData.coCode,
      password: formData.password,
    };

    try {
      await registerAdmin(payload);
      alert("Admin Registered Successfully!");
      navigate("/admin-signin");
    } catch (err) {
      setError(err.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">
      <div className="flex flex-col justify-center w-full md:w-[50%] px-10 bg-white">
        <div className="mb-8">
          <div className="flex items-center">
            <img
              src="assets/logo.png"
              alt="logo"
              className="w-10 h-10 object-contain mr-3"
            />
            <h1 className="text-3xl font-bold text-blue-600">
              College Connect (Admin)
            </h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mt-3">
            Admin Signup
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 max-w-md mx-auto w-full"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
              maxLength={10}
              pattern="[0-9]{10}"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* College Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              College Code
            </label>
            <input
              type="text"
              name="coCode"
              value={formData.coCode}
              onChange={handleChange}
              placeholder="Enter college/institute code"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
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

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
          </div>

          {error && <p className="text-center text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full mt-2 bg-blue-600 text-white py-2.5 rounded-md font-semibold hover:bg-blue-700 transition-all"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-600 mt-3">
            Already an Admin?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate("/admin-signin")}
            >
              Login
            </span>
          </p>
        </form>
      </div>

      <div className="hidden md:flex w-[70%] bg-gradient-to-br from-blue-100 to-blue-50 items-center justify-center relative">
        <img
          src="assets/signupimage1.png"
          alt="Admin Illustration"
          className="w-4/5 rounded-2xl shadow-lg object-cover absolute right-[-40px]"
        />
      </div>
    </div>
  );
};

export default AdminSignUp;
