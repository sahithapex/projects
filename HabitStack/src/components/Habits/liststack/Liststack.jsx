import React from "react";
import { useAppContext } from "../../contextApi/contextApi";
import './List.css'

const ListStack = () => {
  const { habitStacks } = useAppContext();


  return (
    <div className="containerList">
  <h1>Habit Stack Lists</h1>
  <ul>
    {habitStacks.length > 0 ? (
      habitStacks.map((stack, index) => (
        <li key={index} className="habit-stack">
          <h2>{stack.routine}</h2>
          <p>
            Scheduled at: <strong>{stack.hours}:{stack.minute} {stack.ampm}</strong>
          </p>
          <ul className="habit-list">
            {stack.habits && stack.habits.length > 0 ? (
              stack.habits.map((habit, habitIndex) => (
                <li key={habitIndex} className="habit-item">
                  🟢 {habit.habit} <span className="habit-time">({habit.time})</span>
                </li>
              ))
            ) : (
              <p>No habits added for this routine.</p>
            )}
          </ul>
        </li>
      ))
    ) : (
      <p>No habit stacks added yet.</p>
    )}
  </ul>
</div>

  );
};

export default ListStack;
