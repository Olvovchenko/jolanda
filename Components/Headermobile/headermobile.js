import styles from "./headermobile.module.css";
import Link from "next/link";

export default function Headermobile() {
  return (
    <div className={styles.header}>
      <input className={styles.sidemenu} type="checkbox" id="sidemenu" />
      <label className={styles.hamb} htmlFor="sidemenu">
        <span className={styles.hambline}></span>
      </label>

      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link href="/">ПРО МЕНЕ</Link>
          </li>
          <li>
            <Link href="/myproject">МОЇ ПРОЕКТИ</Link>
          </li>
          <li>
            <Link href="/about">МОЇ ПОСЛУГИ</Link>
          </li>
          <li>
            <Link href="#">МАЙСТЕРКА</Link>
          </li>
          <li className={styles.langmenu}>
            <Link href="#">
              <div className={styles.langhref}>ESPANOL</div>
            </Link>
            <a href="#">
              <div className={styles.langhref}>UKRAINIAN</div>
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.logo}>
        <p>ЙОЛАНТА КЛЮСОВСЬКА</p>
        <p style={{ font: "12px Inknut Antiqua" }}>
          МАЙСТЕРНЯ САДОВОЇ СКУЛЬПТУРИ
        </p>
      </div>
    </div>
  );
}
