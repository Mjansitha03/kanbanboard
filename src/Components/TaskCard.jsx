import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskContext } from "../Context/TaskContext";
import { FaTrash } from "react-icons/fa";

// Colors for priority labels
const priorityColors = {
  High: "text-red-500",
  Medium: "text-yellow-500",
  Low: "text-green-500",
};

// Background styles based on task status
const statusBgColors = {
  "To Do": "bg-red-100 border-l-4 border-red-500",
  "In Progress": "bg-yellow-100 border-l-4 border-yellow-500",
  Done: "bg-green-100 border-l-4 border-green-500",
};

const TaskCard = ({ task, index, onOpenModal }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          onClick={() => onOpenModal(task)} // open modal on click
          className={`p-3 rounded-xl shadow hover:shadow-lg transition cursor-pointer ${statusBgColors[task.status]}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex justify-between items-start">
            <div>
              {/* task title */}
              <h3 className="font-semibold text-gray-800">{task.title}</h3>

              {/* description */}
              <p className="text-sm text-gray-600 mt-1">{task.description}</p>

              {/* priority + due date */}
              <div className="flex gap-3 text-xs mt-2 text-gray-500">
                <span className={priorityColors[task.priority]}>
                  {task.priority}
                </span>
                <span>{task.dueDate || "No due date"}</span>
              </div>
            </div>

            {/* delete icon */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent modal opening
                deleteTask(task.id);
              }}
              className="ml-4 text-red-500 hover:text-red-700 cursor-pointer"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
