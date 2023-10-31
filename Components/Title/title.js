import styles from "./title.module.css";
import { cormorantgaramond } from "../../styles/fonts";

export default function Title({ title }) {
  return (
    <div>
      <h2 className={styles.title} style={cormorantgaramond.style}>
        {title}
      </h2>
    </div>
  );
}
