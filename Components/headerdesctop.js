import Image from "next/image";
import styles from "./headerdesctop.module.css";
import thin from "../public/free-icon-instagram-1077042.png";
import multi from "../public/free-icon-multimedia-2909344.png";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["cyrillic"] });

export default function Headerdesctop() {
  return (
    <div className={styles.main}>
      <div className={styles.imagestyle}>
        <Image src={thin} width={15.43} height={16} alt="picture" />
        <div style={{ width: "15px" }}></div>
        <Image src={multi} width={18} height={18} alt="picture" />
      </div>

      <div className={styles.webname}>
        <p
          style={{
            marginTop: "20px",
            marginBottom: "10px",
            fontSize: "36px",
            letterSpacing: "2px",
          }}
        >
          ЙОЛАНТА КЛЮСОВСЬКА
        </p>
        <p style={{ fontSize: "18px", letterSpacing: "2px" }}>
          МАЙСТЕРНЯ САДОВОЇ СКУЛЬПТУРИ
        </p>
      </div>
      <div className={styles.langmenu}>
        <div>Espanol</div>
        <div style={{ width: 24 }}></div> <div>Українська</div>
      </div>
    </div>
  );
}
