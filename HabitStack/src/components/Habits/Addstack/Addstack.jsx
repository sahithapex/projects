import React from "react";
import { useAppContext } from "../../contextApi/contextApi.jsx";
import Routine from "../Routine.jsx";
import "./Addstack.css";

const Addstack = () => {
  const { addHabitStack } = useAppContext(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newFormData = Object.fromEntries(form.entries());
    addHabitStack(newFormData);
    e.target.reset();
  };

  return (
    <div className="addstack-container">
      <h1 className="addstack-heading">Habit Stack</h1>
      <form className="addstack-form" onSubmit={handleSubmit}>
        <select className="addstack-input" name="routine">
          <option value="">Select Routine</option>
          {Routine.map((routine) => (
            <option key={routine.id} value={routine.label}>
              {routine.label}
            </option>
          ))}
        </select>

        <div className="addstack-input-group">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="addstack-main">
            <input
              type="text"
              name={`habit-${index + 1}`}
              placeholder={`Habit number ${index + 1}`}
              className="addstack-input"
            />
            <input type="time" className="addstack-time" required />
          </div>
        ))}
        </div>

        <div className="addstack-time-selection">
        </div>
        <button type="submit" className="sub-btn">Submit</button>
      </form>
    </div>
  );
};

export default Addstack;
