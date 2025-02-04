import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmitext, setBmitext] = useState(null);

  const scale = [
    { label: "Height (m)", placeholder: "Enter height in meters", state: height, setState: setHeight },
    { label: "Weight (kg)", placeholder: "Enter weight in kg", state: weight, setState: setWeight }
  ];

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    
    if (!h || !w || h <= 0 || w <= 0) {
      alert("Please enter valid height and weight values!");
      return;
    }

    const bmiValue = (w / (h * h)).toFixed(2);
    setBmi(bmiValue); 
    if (bmiValue < 18.5) {
      setBmitext("You are underweight!");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBmitext("You are healthy!");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {  
      setBmitext("You are overweight!");
    }else {
      setBmitext("You are obese!");
    }
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {scale.map((item, index) => (
          <div key={index}>
            <label>{item.label}</label>
            <input
              type="number"
              placeholder={item.placeholder}
              value={item.state}
              onChange={(e) => item.setState(e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={calculateBMI}>Calculate</button>
      </form>

      {bmi !== null && <h2>Your BMI: {bmi}</h2>}
      {bmitext !== null && <h2>Your BMI: {bmitext}</h2>}
    </div>
  );
}

export default App;
