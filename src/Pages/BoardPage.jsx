import React, { useContext, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { TaskContext } from "../Context/TaskContext";
import Column from "../Components/Column";
import FilterBar from "../Components/FilterBar";
import TaskModal from "../Components/TaskModal";

// status columns we show
const statuses = ["To Do", "In Progress", "Done"];

const BoardPage = () => {
  const { tasks, updateTask } = useContext(TaskContext);

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("none");

  // modal open/close state
  const [modalTask, setModalTask] = useState(null);

  // filter by priority
  const filtered =
    filter === "All" ? tasks : tasks.filter((t) => t.priority === filter);

  // sort tasks based on option
  const sorted =
    sort === "none"
      ? filtered
      : [...filtered].sort((a, b) => {
          // sort by date first
          if (sort === "dueDate") {
            const da = a.dueDate ? new Date(a.dueDate) : new Date(8640000000000000);
            const db = b.dueDate ? new Date(b.dueDate) : new Date(8640000000000000);
            return da - db;
          }

          // priority sorting (High → Low)
          if (sort === "priority") {
            const order = { High: 1, Medium: 2, Low: 3 };
            return order[a.priority] - order[b.priority];
          }

          return 0;
        });

  // drag-and-drop status update
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) return;

    const task = tasks.find((t) => t.id === draggableId);
    if (!task) return;

    updateTask({ ...task, status: destination.droppableId });
  };

  return (
    <div className="p-6 min-h-screen dark:bg-slate-900 transition">

      {/* main heading */}
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600 dark:text-sky-400">
        Task Board
      </h1>

      {/* filter + sorting bar */}
      <FilterBar filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />

      <DragDropContext onDragEnd={onDragEnd}>
        {/* 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {statuses.map((status) => (
            <Column
              key={status}
              status={status}
              tasks={sorted.filter((t) => t.status === status)}
              onOpenModal={setModalTask}
            />
          ))}
        </div>
      </DragDropContext>

      {/* modal render */}
      {modalTask && (
        <TaskModal task={modalTask} onClose={() => setModalTask(null)} />
      )}
    </div>
  );
};

export default BoardPage;
