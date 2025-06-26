// components/ui/Button.jsx
import React from 'react';

export default function Button({
  children,
  variant = "primary",
  className = "",
  loading = false,
  disabled = false,
  ...props
}) {
  const base = "px-6 py-2 rounded-full font-mont font-semibold transition flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600  hover:scale-105",
    secondary: "text-orange-600 border-orange-600 border-1 hover:bg-orange-500 hover:text-white hover:scale-105",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const spinner = (
    <svg
      className="animate-spin h-4 w-4 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      ></path>
    </svg>
  );

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  return (
    <button
      className={classes}
      disabled={loading || disabled}
      {...props}
    >
      {loading && spinner}
      {loading ? 'Loading...' : children}
    </button>
  );
}
