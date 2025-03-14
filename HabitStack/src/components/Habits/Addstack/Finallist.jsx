import React from 'react';
import { useAppContext } from "../../contextApi/contextApi.jsx";

const Finallist = () => {
  const { habitStacks } = useAppContext();

  if (!habitStacks) {
    return <h1>Loading...</h1>;
  }

  const { habit1, habit2, habit3, habit4, habit5 } = habitStacks;

  return (
    <div>
      <h1>{habit1 || "No Habit 1"}</h1>
      <h1>{habit2 || "No Habit 2"}</h1>
      <h1>{habit3 || "No Habit 3"}</h1>
      <h1>{habit4 || "No Habit 4"}</h1>
      <h1>{habit5 || "No Habit 5"}</h1>
    </div>
  );
};

export default Finallist;

