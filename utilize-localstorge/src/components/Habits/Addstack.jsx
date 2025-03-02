import React, { useState } from "react";
import Routine from "./Routine.jsx";
import "./Addstack.css";

const Addstack = () => {
  const [formdata, setFormdata] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const newFormData = Object.fromEntries(form.entries()); 

    setFormdata(newFormData);
    console.log("Form Submitted:", newFormData);

    e.target.reset(); 
  };

  return (
    <div className="addstack-container">
      <h1 className="addstack-heading">Habit Stack</h1>
      <form className="addstack-form" onSubmit={handleSubmit}>
        <label className="addstack-label">Habit Stack Title:</label>
        <select className="addstack-select" name="routine">
          <option value="">Select Routine</option>
          {Routine.map((routine) => (
            <option key={routine.id} value={routine.id}>
              {routine.label}
            </option>
          ))}
        </select>

        <div className="addstack-input-group">
          <label className="addstack-label">Routine Name:</label>
          <input type="text" name="name" placeholder="Enter your habit stack" className="addstack-input" />
        </div>

        <div className="addstack-time">
          <label className="addstack-label">Select Time:</label>
        </div>
        <div className="addstack-time-selection">
          <div>
            <label className="addstack-label">Hours:</label>
            <select className="addstack-select" name="hours">
              {[...Array(13)].map((_, i) => (
                <option key={i} value={(i).toString().padStart(2, "0")}>
                  {i.toString().padStart(2, "0") }
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="addstack-label">Minutes:</label>
            <select className="addstack-select" name="minute">
              {[0, 15, 30, 45].map((min) => (
                <option key={min} value={min.toString().padStart(2, "0")}>
                  {min.toString().padStart(2, "0")}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="addstack-label">AM/PM:</label>
            <select className="addstack-select" name="ampm">
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>

        <button type="submit" className="sub-btn">Submit</button>
      </form>

      {formdata && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <p><strong>Routine:</strong> {formdata.routine}</p>
          <p><strong>Name:</strong> {formdata.name}</p>
          <p><strong>Time:</strong> {formdata.hours}:{formdata.minute} {formdata.ampm}</p>
        </div>
      )}
    </div>
  );
};

export default Addstack;
