import React from "react";
import "./Sidebar.css";
import { useProductContext } from "../contextApi/contextApi.jsx";

const Sidebar = ({ setSelectedCategory }) => {
  const products = useProductContext();
  const categories = [...new Set(products.map((item) => item.category))];

  return (
    <div className="sidebar">
      <h1>Categories</h1>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sidebar;
