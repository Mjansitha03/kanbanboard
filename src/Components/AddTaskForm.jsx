import React, { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";

const AddTaskForm = () => {
  // get function to save task
  const { addTask } = useContext(TaskContext);

  // for redirecting user
  const navigate = useNavigate();

  // form values
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    status: "To Do",
  });

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // avoid empty tasks
    if (!form.title.trim()) return;

    // save task and go home
    addTask({ ...form, id: Date.now().toString() });
    navigate("/");
  };

  return (
    <div className="glass-card max-w-md mx-auto p-6 relative">
      {/* close button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-3 right-3 text-gray-600 hover:text-red-500 cross-btn cross-btn:hover transition text-xl cursor-pointer"
      >
        <FiX />
      </button>

      {/* form title */}
      <h2 className="text-xl font-semibold mb-4 text-sky-600 dark:text-sky-400">
        Add New Task
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* title input */}
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 rounded text-slate-900 placeholder:text-black cursor-pointer"
          required
        />

        {/* description */}
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2 rounded text-slate-900 placeholder:text-black cursor-pointer"
        />

        {/* priority */}
        <select
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
          className="border p-2 rounded cursor-pointer"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        {/* due date */}
        <input
          type="date"
          value={form.dueDate}
          onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
          className="border p-2 rounded cursor-pointer"
        />

        {/* status */}
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="border p-2 rounded cursor-pointer"
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>

        {/* submit button */}
        <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded mt-2 cursor-pointer">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
