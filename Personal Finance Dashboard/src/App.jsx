import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar"; // Import the Navbar
import Dashboard from "./components/Header/Dashboard";

import FormExpense from "./components/FormExpense";

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-expense" element={<FormExpense />} />
      </Routes>
    </Router>
  );
}

export default App;
