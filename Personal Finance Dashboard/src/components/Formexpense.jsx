import React, { useState } from "react";
import expenses from "./expenses";

const FormExpense = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  return (
    <div className="form-container">
      <h2>Add Expense</h2>

  
      <label>Category</label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        {Object.keys(expenses).map((category) => (
          <option key={category} value={category}>
            {category.replace(/([A-Z])/g, " $1").trim()}
          </option>
        ))}
      </select>

    
      {selectedCategory && (
        <>
          <label>Subcategory</label>
          <select value={selectedSubcategory} onChange={handleSubcategoryChange}>
            <option value="">Select Subcategory</option>
            {Object.keys(expenses[selectedCategory]).map((sub) => (
              <option key={sub} value={sub}>
                {sub.replace(/([A-Z])/g, " $1").trim()}
              </option>
            ))}
          </select>
        </>
      )}

   
      {selectedCategory && selectedSubcategory && (
        <div className="selected-values">
          <p><strong>Selected Category:</strong> {selectedCategory.replace(/([A-Z])/g, " $1").trim()}</p>
          <p><strong>Selected Subcategory:</strong> {selectedSubcategory.replace(/([A-Z])/g, " $1").trim()}</p>
        </div>
      )}
    </div>
  );
};

export default FormExpense;
