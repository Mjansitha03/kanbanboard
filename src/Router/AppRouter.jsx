import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AddTaskPage from "../Pages/AddTaskPage";
import BoardPage from "../Pages/BoardPage";
import HomePage from "../Pages/HomePage";

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/board-page" element={<BoardPage />} />
      <Route path="/add" element={<AddTaskPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
