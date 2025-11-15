import React from "react";

const FilterBar = ({ filter, setFilter, sort, setSort }) => (
  
  <div className="glass-card flex flex-wrap justify-between items-center p-4 rounded mb-6 gap-4 bg-purple-50!">
    
    {/* Priority Filter */}
    <div className="flex items-center gap-2">
      <label className="font-medium text-purple-600">Filter:</label>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="bg-transparent border px-2 py-1 rounded outline-none text-black cursor-pointer"
      >
        <option value="All">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>

    {/* Sorting Options */}
    <div className="flex items-center gap-2">
      <label className="font-medium text-purple-600">Sort:</label>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="bg-transparent border px-2 py-1 rounded outline-none text-black cursor-pointer"
      >
        <option value="none">None</option>
        <option value="dueDate">Due Date</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  </div>
);

export default FilterBar;
