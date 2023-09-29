import styles from "./picture.module.css";
import Image from "next/image";

export default function Mainpicture({ one }) {
  return (
    <div className={styles.mainimage}>
      <Image src={one} className={styles.bigimstyle} />
    </div>
  );
}
