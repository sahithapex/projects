import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [habitStacks, setHabitStacks] = useState([]); 

  const toggleTheme = () => setIsDark((prev) => !prev);

  const addHabitStack = (newStack) => {
    setHabitStacks((prevStacks) => [...prevStacks, newStack]); 
  };

  return (
    <AppContext.Provider value={{ isDark, toggleTheme, habitStacks, addHabitStack }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
