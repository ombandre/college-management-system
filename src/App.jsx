import { Routes, Route } from "react-router-dom";
import AdminSignUp from "./pages/auth/AdminSignUp";
import AdminSignIn from "./pages/auth/AdminSignIn";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        {/* 
        // Home Page (commented out for now)
        <Route
          path="/"
          element={
            <div className="flex items-center justify-center min-h-screen bg-black">
              <div className="text-6xl font-extrabold text-blue-600 text-center">
                College Management System
              </div>
            </div>
          }
        /> 
        */}

        {/* User Signup Page */}
        <Route path="/" element={<AdminSignIn />} />
        <Route path="/admin-signup" element={<AdminSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
