import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero-image.png";

const HomePage = () => {
  return (
    <div
      className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-10 
      dark:bg-linear-to-br dark:from-slate-900 dark:to-slate-800 transition-all duration-300"
    >
      {/* Left content — headline + CTA */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 left-content leading-tight">
          Organize Your Work <br />
          with <span className="text-sky-500 dark:text-sky-300">TaskFlow</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-100 text-lg md:text-xl max-w-md">
          Manage tasks easily with a clean and modern Kanban board. Track
          progress, stay productive, and complete your goals efficiently.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <Link
            to="/board-page"
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-xl shadow-lg 
            transition hover:scale-105 active:scale-95"
          >
            Go to Board
          </Link>

          <Link
            to="/add"
            className="border border-sky-500 text-sky-600 dark:text-sky-300 
            hover:bg-sky-100 dark:hover:bg-sky-700 px-4 py-2 rounded-xl 
            transition hover:scale-105 active:scale-95"
          >
            + Add Task
          </Link>
        </div>
      </div>

      {/* Illustration */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={hero}
          alt="TaskFlow task management illustration"
          className="w-64 sm:w-80 md:w-[420px] drop-shadow-xl rounded-xl"
        />
      </div>
    </div>
  );
};

export default HomePage;
