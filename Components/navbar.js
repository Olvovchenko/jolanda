import styles from "./navbar.module.css";
import Link from "next/link";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <div className={styles.navdesctop + " " + "opesans"}>
      <div>OUR MARKET</div>
      <Link href="/myproject">GALLERY</Link>
      <Link href="/about">МОЇ ПОСЛУГИ</Link>
      <div>МАЙСТЕРКЛАСИ</div>
      <Link href="#cont">КОНТАКТИ</Link>
    </div>
  );
}
