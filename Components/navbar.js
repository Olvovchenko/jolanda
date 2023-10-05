import styles from "./navbar.module.css";
import Link from "next/link";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["cyrillic"] });

export default function Navbar() {
  return (
    <div className={styles.navdesctop + " " + opensans.className}>
      <div>ПРО МЕНЕ</div>
      <Link href="/myproject">МОЇ ПРОКЕТИ</Link>
      <Link href="/about" style={{ fontFamily: "sans-serif" }}>
        МОЇ ПОСЛУГИ
      </Link>
      <div>МАЙСТЕРКА</div>
      <Link href="#cont">КОНТАКТИ</Link>
    </div>
  );
}
