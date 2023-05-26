import React, { useState, useEffect } from "react";

const ClickMe: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const hasButtonBeenShown = localStorage.getItem("buttonShown");

    if (!hasButtonBeenShown) {
      const timer = setTimeout(() => {
        setShowButton(true);
        localStorage.setItem("buttonShown", "true");
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);
  return (
    <div className="space-x-3 gap-4">
      {showButton && (
        <button
          type="button"
          disabled
          className="text-white animate-pulse  bg-gray-600 opacity-25  hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin rounded-lg text-xs px-3 py-1.5 text-center inline-flex items-center"
        >
          Click Here
          <svg
            aria-hidden="true"
            className="w-5 h-3 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ClickMe;
