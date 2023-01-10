import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <header className={theme}>
      <h1>{user}</h1>
      <h1>Header</h1>
      <input
        type="radio"
        onClick={handleTheme}
        name="theme"
        id="light"
        value="light"
      />
      <label htmlFor="light">Claro</label>
      <input
        type="radio"
        onClick={handleTheme}
        name="theme"
        id="dark"
        value="dark"
      />
      <label htmlFor="dark">Oscuro</label>
    </header>
  );
};

export default Header;
