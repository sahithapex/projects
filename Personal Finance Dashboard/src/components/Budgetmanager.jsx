import React, { useState } from "react";
import "./budget.css";

const BudgetManager = () => {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [expenseList, setExpenseList] = useState([]);
  

  const totalExpenses = expenseList.reduce((total, item) => total + item.amount, 0);
  

  const remainingBudget = income ? income - totalExpenses : 0;

  const handleAddExpense = () => {
    if (expense && !isNaN(expense)) {
      setExpenseList([...expenseList, { id: Date.now(), amount: parseFloat(expense) }]);
      setExpense(""); 
    }
  };

  return (
    <div className="budget-container">
      <h2>Budget Manager</h2>

     
      <label>Enter Monthly Income</label>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(parseFloat(e.target.value) || "")}
        placeholder="Enter income"
      />

  
      <label>Enter Expense</label>
      <input
        type="number"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        placeholder="Enter expense amount"
      />
      <button onClick={handleAddExpense}>Add Expense</button>

   
      <h3>Expense List</h3>
      <ul>
        {expenseList.map((item) => (
          <li key={item.id}>₹{item.amount}</li>
        ))}
      </ul>

    
      <h3>Total Expenses: ₹{totalExpenses}</h3>
      <h3>

