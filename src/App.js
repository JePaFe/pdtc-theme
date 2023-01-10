import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Header />
      </UserContextProvider>
      <Main />
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
