import React from "react";
import Routine from "./Routine.jsx";
import "./Addstack.css";

const Addstack = () => {
  return (
      <div className="addstack-container">
        <h1 className="addstack-heading">Habit Stack</h1>
        <form className="addstack-form">
          <label className="addstack-label">Habit Stack Title:</label>
          <select className="addstack-select">
            {Routine.map((routine) => (
              <option key={routine.id} value={routine.id}>
                {routine.label}
              </option>
            ))}
          </select>  
        <div className="addstack-input-group">
          <label className="addstack-label">Routine Name:</label>
          <input
            type="text"
            placeholder="Enter your habit stack"
            className="addstack-input"
          />
        </div>   
        <div className="addstack-time">
          <label className="addstack-label">Select Time:</label> </div>
          <div className="addstack-time-selection">
           
            <div>
              <label className="addstack-label">Hours:</label>
              <select className="addstack-select">
              {[...Array(13)].map((_, i) => (
              <option key={i} value={i.toString().padStart(2, "0")}>
                {i.toString().padStart(2, "0")}
              </option>
            ))}


              </select>
            </div>

            <div>
              <label className="addstack-label">Minutes:</label>
              <select className="addstack-select">
                {[0, 15, 30, 45].map((min) => (
                  <option key={min} value={min}>
                    {min.toString().padStart(2, "0")}
                  </option>
                ))}
              </select>
            </div>

            {/* AM/PM */}
            <div>
              <label className="addstack-label">AM/PM:</label>
              <select className="addstack-select">
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
          </form>
          </div>
       
        

  );
};

export default Addstack;
