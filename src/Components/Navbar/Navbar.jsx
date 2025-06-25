import React from "react";

export default function Navbar() {
    return (
        <div className="w-full h-15 font-mont">
            <nav className="w-full flex items-center justify-between px-6 py-4  ">
                <div className="text-xl font-bold">CampusFlow</div>
                <ul className="flex gap-6">
                    <li>
                        Already a user ?
                        <a href="/signin" className="hover:underline  ">
                            Sign in
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
