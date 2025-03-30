import f1logo from "../assets/logo.jpeg";
import React from "react";

export default function Menu() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="/" className="flex items-center">
          <img src={f1logo} alt="F1 Logo" className="h-12 mr-3 rounded-full" />
          <span className="text-2xl font-bold tracking-wide">F1 Streaming</span>
        </a>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="/" className="hover:text-red-500 transition duration-300">
              Home 🏎️
            </a>
          </li>
          <li>
            <a
              href="/archive"
              className="hover:text-red-500 transition duration-300"
            >
              Archives
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-red-500 transition duration-300"
            >
              About
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-gray-400 hover:text-white focus:outline-none"
          onClick={() =>
            document.getElementById("mobile-menu").classList.toggle("hidden")
          }
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div id="mobile-menu" className="hidden md:hidden bg-gray-800">
        <ul className="space-y-4 p-4">
          <li>
            <a
              href="/"
              className="block hover:text-red-500 transition duration-300"
            >
              Home 🏎️
            </a>
          </li>
          <li>
            <a
              href="/archive"
              className="block hover:text-red-500 transition duration-300"
            >
              Archives
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block hover:text-red-500 transition duration-300"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
