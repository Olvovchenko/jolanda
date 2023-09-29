import styles from "./picture.module.css";
import Image from "next/image";

export default function Pictureface({ one }) {
  return (
    <div className={styles.bigimage}>
      <Image src={one} className={styles.bigimstyle} />
    </div>
  );
}
