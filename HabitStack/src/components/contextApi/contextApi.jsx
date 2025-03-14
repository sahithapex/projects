import React, { createContext, useContext, useState, useEffect } from "react";
import habitStacksfake from './habitfakelist'

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [habitStacks, setHabitStacks] = useState(habitStacksfake); 

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const addHabitStack = (newStack) => {
    setHabitStacks((prevStacks) => [...prevStacks, newStack]); 
  };

  return (
    <AppContext.Provider value={{ toggleTheme,habitStacks, addHabitStack }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
