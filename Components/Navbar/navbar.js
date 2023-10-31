import styles from "./navbar.module.css";
import Link from "next/link";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({
  subsets: ["cyrillic"],

  weight: "400",
});

export default function Navbar() {
  return (
    <div className={styles.navdesctop} style={opensans.style}>
      <Link href="/" className={styles.linkstyle}>
        ПРО МЕНЕ
      </Link>
      <Link href="/myproject" className={styles.linkstyle}>
        МОЇ ПРОКЕТИ
      </Link>
      <Link href="/achieve" className={styles.linkstyle}>
        ПУБЛІКАЦІЇ І ДОСЯГНЕННЯ
      </Link>
      <Link href="/maisterka" className={styles.linkstyle}>
        МАЙСТЕРКА
      </Link>

      <Link href="#cont" className={styles.linkstyle}>
        КОНТАКТИ
      </Link>
    </div>
  );
}
