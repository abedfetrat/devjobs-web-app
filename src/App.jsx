import Home from "./pages/Home/Home";
import "./assets/styles/_index";
import "./App.css";
import ThemeContext from "./contexts/theme-context";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      <div className={`${theme} app`}>
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
