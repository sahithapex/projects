import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [habitStacks, setHabitStacks] = useState([]); 

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const addHabitStack = (newStack) => {
    setHabitStacks((prevStacks) => [...prevStacks, newStack]); 
  };

  return (
    <AppContext.Provider value={{ isDark, toggleTheme,habitStacks, addHabitStack }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
