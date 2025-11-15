import React from "react";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

const Column = ({ status, tasks, onOpenModal }) => {
  // Text color by column type
  const getColor = () => {
    if (status === "To Do") return "text-red-600";
    if (status === "In Progress") return "text-yellow-600";
    if (status === "Done") return "text-green-600";
    return "text-indigo-500";
  };

  // Background color by column type
  const bgColor = () => {
    if (status === "To Do") return "bg-red-50";
    if (status === "In Progress") return "bg-yellow-50";
    if (status === "Done") return "bg-green-50";
    return "bg-white";
  };

  // Scrollbar theme
  const scrollColor = () => {
    if (status === "To Do")
      return "scrollbar-thumb-red-50 scrollbar-track-red-100 hover:scrollbar-thumb-red-500";

    if (status === "In Progress")
      return "scrollbar-thumb-yellow-50 scrollbar-track-yellow-100 hover:scrollbar-thumb-yellow-500";

    if (status === "Done")
      return "scrollbar-thumb-green-50 scrollbar-track-green-100 hover:scrollbar-thumb-green-500";

    return "bg-white";
  };

  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={`shadow-md rounded-2xl p-4 min-h-[400px] ${bgColor()}`}
        >
          {/* Column Title */}
          <h2 className={`text-xl font-semibold mb-10 ${getColor()}`}>
            {status}
          </h2>

          {/* Scrollable Tasks List */}
          <div
            className={`flex flex-col gap-3 overflow-y-auto max-h-[300px] pr-2 
              scrollbar-thin ${scrollColor()}`}
          >
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                onOpenModal={onOpenModal} 
              />
            ))}

            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default Column;
