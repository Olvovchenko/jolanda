import styles from "./minipicture.module.css";
import Image from "next/image";

export default function Minipicture({ one, two }) {
  return (
    <div>
      <div className={styles.littleimage}>
        <Image src={one} className={styles.imstyle} />
        <Image src={two} className={styles.imstyle} />
      </div>
    </div>
  );
}
