import React from "react";
import { useAppContext } from "../contextApi/contextApi";

const Liststack = () => {
  const { habitStacks } = useAppContext();

  return (
    <div>
      <h1>Habit Stack Lists</h1>
      <ul>
        {habitStacks.length > 0 ? (
          habitStacks.map((stack, index) => (
            <li key={index}>
              <strong>{stack.name}</strong> - {stack.routine} at {stack.hours}:{stack.minute} {stack.ampm}
            </li>
          ))
        ) : (
          <p>No habit stacks added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default Liststack;
