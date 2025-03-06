import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
 
  const [finance, setFinance] = useState({
    totalBalance: 500000,
    monthlyIncome: 80000,
    monthlyExpenses: 45000,
    savings: 120000,
  });

  return (
    <div className="dashboard">
      <h2>Finance Overview</h2>
      <div className="cards-container">
      
        <div className="card">
          <h3>Total Balance</h3>
          <p>₹{finance.totalBalance.toLocaleString()}</p>
        </div>

        
        <div className="card">
          <h3>Monthly Income</h3>
          <p>₹{finance.monthlyIncome.toLocaleString()}</p>
        </div>

      
        <div className="card">
          <h3>Monthly Expenses</h3>
          <p>₹{finance.monthlyExpenses.toLocaleString()}</p>
        </div>

        
        <div className="card">
          <h3>Savings</h3>
          <p>₹{finance.savings.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
