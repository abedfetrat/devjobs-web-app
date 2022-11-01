import styles from "./Switch.module.css";

function Switch({ toggled, onChange }) {
  return (
    <label className={styles.switch}>
      <input
        className={styles.input}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <span className={styles.slider}></span>
    </label>
  );
}

export default Switch;
