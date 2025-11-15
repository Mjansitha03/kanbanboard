import React, { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import { FiX } from "react-icons/fi";

const TaskModal = ({ task, onClose }) => {
  const { updateTask, deleteTask } = useContext(TaskContext);

  // local editable copy
  const [form, setForm] = useState({ ...task });

  // save updates
  const handleSave = () => {
    updateTask(form);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container glass-card p-6 rounded-2xl shadow-xl w-[95%] max-w-lg relative">

        {/* modal close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-600 hover:text-red-500 cross-btn text-xl cursor-pointer"
        >
          <FiX />
        </button>

        {/* modal heading */}
        <h2 className="text-2xl font-semibold mb-2 text-sky-600">
          Task Details
        </h2>

        {/* title input */}
        <label className="font-medium">Title</label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 rounded w-full mb-1 cursor-pointer"
        />

        {/* description box */}
        <label className="font-medium">Description</label>
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2 rounded w-full mb-1 cursor-pointer"
          rows={3}
        />

        {/* priority dropdown */}
        <label className="font-medium">Priority</label>
        <select
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
          className="border p-2 rounded w-full mb-1 cursor-pointer"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        {/* due date */}
        <label className="font-medium">Due Date</label>
        <input
          type="date"
          value={form.dueDate}
          onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
          className="border p-2 rounded w-full mb-1 cursor-pointer"
        />

        {/* status dropdown */}
        <label className="font-medium">Status</label>
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="border p-2 rounded w-full mb-1 cursor-pointer"
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>

        {/* modal buttons */}
        <div className="flex justify-between mt-3">
          {/* delete task */}
          <button
            onClick={() => {
              deleteTask(task.id);
              onClose();
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Delete
          </button>

          {/* save changes */}
          <button
            onClick={handleSave}
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
