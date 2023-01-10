import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return <footer className={theme}>Footer</footer>;
};

export default Footer;
