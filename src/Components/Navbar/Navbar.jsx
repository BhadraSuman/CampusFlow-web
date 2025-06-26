import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    console.log(location);
    return (
        <div className="w-full h-15 font-mont">
            <nav className="w-full flex items-center justify-between px-6 py-4  ">
                <div className="text-xl font-bold">CampusFlow</div>
                <ul className="flex gap-6">
                    {location.pathname == "/signup" ? (
                        <li>
                            Already a user ?
                            <Link to="/login" className="hover:underline font-semibold pl-2">
                                Login in
                            </Link>
                        </li>
                    ) : (
                        <li>
                            Don't have and account ?
                            <Link to="/signup" className="hover:underline font-semibold pl-2">
                                Sign up
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}
