import React from "react";

const ErrorTask = ({ error, setError }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-red-600">Error</h2>
        <p className="text-gray-700">{error}</p>
        <button
          onClick={() => setError(false)}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorTask;
