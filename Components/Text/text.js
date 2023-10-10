import styles from "./text.module.css";
export default function Text({ text }) {
  return (
    <div className={styles.textaround}>
      <p className={styles.textjolanta}>{text}</p>
    </div>
  );
}
