import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Main = () => {
  const { theme } = useContext(ThemeContext);

  return <main className={theme}>Main</main>;
};

export default Main;
