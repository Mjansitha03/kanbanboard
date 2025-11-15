import React, { useEffect, useReducer } from "react";
import { TaskContext } from "./TaskContext";

// Load saved tasks safely from localStorage
const loadInitial = () => {
  try {
    const raw = localStorage.getItem("tasks");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

// Reducer keeps logic predictable and clean
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "UPDATE_TASK":
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, [], loadInitial);

  // Save tasks every time state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Action shortcuts
  const addTask = (task) => dispatch({ type: "ADD_TASK", payload: task });
  const updateTask = (task) => dispatch({ type: "UPDATE_TASK", payload: task });
  const deleteTask = (id) => dispatch({ type: "DELETE_TASK", payload: id });

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
