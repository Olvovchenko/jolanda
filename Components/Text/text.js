import styles from "./text.module.css";
import { cormorantgaramond } from "../../styles/fonts";

export default function Text({ text }) {
  return (
    <div className={styles.textaround} style={cormorantgaramond.style}>
      <p className={styles.textjolanta}>{text}</p>
    </div>
  );
}
