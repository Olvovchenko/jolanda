import styles from "./navbar.module.css";
import Link from "next/link";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["cyrillic"] });

export default function Navbar() {
  return (
    <div className={styles.navdesctop + " " + opensans.className}>
      <Link href="/" className={styles.linkstyle}>
        ПРО МЕНЕ
      </Link>
      <Link href="/myproject" className={styles.linkstyle}>
        МОЇ ПРОКЕТИ
      </Link>
      <Link href="/about" className={styles.linkstyle}>
        МОЇ ПОСЛУГИ
      </Link>
      <div>МАЙСТЕРКА</div>
      <Link href="#cont" className={styles.linkstyle}>
        КОНТАКТИ
      </Link>
    </div>
  );
}
