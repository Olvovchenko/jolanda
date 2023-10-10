import styles from "./picture.module.css";
import Image from "next/image";

export default function Picture({ one, two, three }) {
  return (
    <div>
      <div className={styles.littleimage}>
        <Image src={one} className={styles.imstyle} />
        <Image src={two} className={styles.imstyle} />
      </div>

      <div className={styles.bigimage}>
        <Image src={three} className={styles.bigimstyle} />
      </div>
    </div>
  );
}
