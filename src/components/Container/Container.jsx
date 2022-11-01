import styles from "./Container.module.css";

function Container({ children, tag }) {
  const Tag = tag ? tag : "div";
  return <Tag className={styles.container}>{children}</Tag>;
}

export default Container;
