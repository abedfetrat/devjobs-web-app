import styles from "./ThemeToggle.module.css";
import { ReactComponent as SunIcon } from "../../assets/svg/desktop/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/svg/desktop/icon-moon.svg";
import Switch from "../Switch/Switch";
import ThemeContext, { THEMES } from "../../contexts/theme-context";
import { useContext } from "react";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <SunIcon />
      <Switch toggled={theme === THEMES.dark} onChange={toggleTheme} />
      <MoonIcon />
    </div>
  );
}

export default ThemeToggle;
