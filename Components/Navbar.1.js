import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navdesctop}>
      <div>OUR MARKET</div>
      <Link href="/myproject">GALLERY</Link>
      <Link href="/about">МОЇ ПОСЛУГИ</Link>
      <div>МАЙСТЕРКЛАСИ</div>
      <Link href="#cont">КОНТАКТИ</Link>
    </div>
  );
}
