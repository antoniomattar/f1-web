/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          Made with <span className="text-red-500">&hearts;</span> by{" "}
          <a
            href="https://www.instagram.com/antonio_mattar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 transition duration-300"
          >
            @antonio_mattar
          </a>
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://www.instagram.com/antonio_mattar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition duration-300"
            aria-label="Instagram"
          ></a>
        </div>
      </div>
    </footer>
  );
}
