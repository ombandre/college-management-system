import { Routes, Route } from "react-router-dom";
import UserSignUp from "./pages/auth/UserSignUp";
import UserSignIn from "./pages/auth/UserSignIn";
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

        {/* User Sign In Page (default route) */}
        <Route path="/user-signin" element={<UserSignIn />} />

        {/* User Sign Up Page */}
        <Route path="/user-signup" element={<UserSignUp />} />

        {/* Admin Sign In Page */}
        <Route path="/admin-signin" element={<AdminSignIn />} />    

        {/* Admin Sign Up Page */}
        <Route path="/admin-signup" element={<AdminSignUp />} />


      </Routes>
    </div>
  );
}

export default App;
