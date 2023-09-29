import Headerdesctop from "./headerdesctop.js";
import Headermobile from "./headermobile.js";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.bigheader}>
      <Headerdesctop />
      <Headermobile />
    </div>
  );
}
