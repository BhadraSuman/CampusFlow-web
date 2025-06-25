import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function Input({ label, error, className = "", ...props }) {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = props.type === "password";
    const inputType = isPassword && showPassword ? "text" : props.type;

    const baseStyles = "w-full rounded-full shadow-sm pr-6 font-mont flex items-center ";
    const errorStyles = error ? "ring-red-500 border border-red-500" : "border border-gray-300 focus:ring-gray-500";

    return (
        <div className="space-y-1">
            {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
            <div className={`${baseStyles} ${errorStyles} ${className}`}>
                <input
                    {...props}
                    type={inputType}
                    className="w-full focus:outline-none pl-6 py-2 bg-transparent text-sm"
                />
                { isPassword && (
                    showPassword ? (
                        <IoEyeOff
                            className="cursor-pointer text-gray-500"
                            onClick={() => setShowPassword(false)}
                        />
                    ) : (
                        <IoEye
                            className="cursor-pointer text-gray-500"
                            onClick={() => setShowPassword(true)}
                        />
                    )
                )}
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
    );
}
