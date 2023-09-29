import styles from "./headermobile.module.css";

export default function Headermobile() {
  return (
    <div className={styles.header}>
      <input className={styles.sidemenu} type="checkbox" id="sidemenu" />
      <label className={styles.hamb} for="sidemenu">
        <span className={styles.hambline}></span>
      </label>

      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <a href="#">ПРО МЕНЕ</a>
          </li>
          <li>
            <a href="#">МОЇ ПРОЕКТИ</a>{" "}
          </li>
          <li>
            <a href="#">МОЇ ПОСЛУГИ</a>
          </li>
          <li>
            <a href="#">МАЙСТЕРКЛАСИ</a>
          </li>
          <li className={styles.langmenu}>
            <a href="#">
              <div style={{ padding: "0", border: "1px solid teal" }}>
                ESPANOL
              </div>
            </a>
            <a href="#">
              <div style={{ padding: "0", border: "1px solid teal" }}>
                UKRAINIAN
              </div>
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.logo}>
        <p>YOLANTA KLUSOVSKA</p>
        <p style={{ font: "12px Inknut Antiqua" }}>
          ЛАНДШАФТНИЙ ДИЗАЙН I САДІВНИЦТВО
        </p>
      </div>
    </div>
  );
}
