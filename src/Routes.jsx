import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, Bounce } from "react-toastify";

import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";

import Home from "./Pages/Home/Home";
import ProtectedRoute from "../ProtectedRoutes/ProtectedRoutes";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { setIsAuthenticated } from "./Redux/Slices/AuthSlice";

function App() {
    const location = useLocation();
    const hiddenSidebarRoutes = ["/login", "/signup"];

    const isSidebarVisible = !hiddenSidebarRoutes.includes(location.pathname);

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log(isAuthenticated)

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} theme="light" transition={Bounce} />

            <div className="flex min-h-screen">
                {/* Show Sidebar only if user is logged in */}
                {isAuthenticated && isSidebarVisible && <Sidebar />}

                <div className="flex-1 p-4">
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />

                        {/* Protected Routes */}
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute isAuthenticated={isAuthenticated}>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
