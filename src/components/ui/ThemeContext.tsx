"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>("light");

  useEffect(() => {
    const saved = localStorage.getItem("keestrack-theme") as ThemeType;
    if (saved && (saved === "light" || saved === "dark")) {
      setThemeState(saved);
    }
  }, []);

  const setTheme = (t: ThemeType) => {
    setThemeState(t);
    localStorage.setItem("keestrack-theme", t);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`min-h-screen transition-theme ${theme === "dark" ? "dark theme-dark" : ""} bg-background text-foreground flex flex-col`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
