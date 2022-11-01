import styles from "./PageHeader.module.css";
import Container from "../Container/Container";
import { ReactComponent as Logo } from "../../assets/svg/desktop/logo.svg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function PageHeader() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Logo />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
