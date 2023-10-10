import Headerdesctop from "../Headerdesctop/headerdesctop.js";
import Headermobile from "../Headermobile/headermobile.js";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.bigheader}>
      <Headerdesctop />
      <Headermobile />
    </div>
  );
}
