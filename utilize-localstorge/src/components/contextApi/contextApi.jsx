import React, { createContext, useContext, useState } from "react";
import "./styles.css"; // Import CSS

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ToggleSwitch = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle-container">
      <span>{isDark ? "Dark Mode" : "Light Mode"}</span>
      <div className={`toggle-switch ${isDark ? "dark" : ""}`} onClick={toggleTheme}>
        <div className="toggle-handle"></div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <ToggleSwitch />
      </div>
    </ThemeProvider>
  );
}
