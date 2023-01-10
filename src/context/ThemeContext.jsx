import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleTheme = (e) => {
    setTheme(e.target.value);
  };

  const data = {
    theme,
    handleTheme,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeContextProvider };
