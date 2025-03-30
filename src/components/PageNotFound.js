import React from "react";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <p className="text-lg text-gray-600 mb-8 text-center">
        You are lost in the woods. This page does not exist.
        <br />
        Please go back to the home page. Thank you!
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
      >
        Go to Home
      </a>
    </div>
  );
}
