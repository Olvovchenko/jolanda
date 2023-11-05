import styles from "./headermobile.module.css";
import Link from "next/link";
import { viaodalibre } from "../../styles/fonts";
import { opensans } from "../../styles/fonts";

export default function Headermobile() {
  return (
    <div className={styles.header}>
      <input className={styles.sidemenu} type="checkbox" id="sidemenu" />
      <label className={styles.hamb} htmlFor="sidemenu">
        <span className={styles.hambline}></span>
      </label>

      <nav className={styles.nav}>
        <ul className={styles.menu} style={opensans.style}>
          <li>
            <Link href="/">ПРО МЕНЕ</Link>
          </li>
          <li>
            <Link href="/myproject">МОЇ ПРОЕКТИ</Link>
          </li>
          <li>
            <Link href="/achieve">ПУБЛІКАЦІЇ І ДОСЯГНЕННЯ</Link>
          </li>
          <li>
            <Link href="maisterka">МАЙСТЕРКА</Link>
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

      <div className={styles.logo} styles={viaodalibre.style}>
        <p>ЙОЛАНТА КЛЮСОВСЬКА</p>
        <p className={styles.maister} style={viaodalibre.style}>
          МАЙСТЕРНЯ САДОВОЇ СКУЛЬПТУРИ
        </p>
      </div>
    </div>
  );
}
