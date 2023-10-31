import Image from "next/image";
import styles from "./headerdesctop.module.css";
import thin from "../../public/thin.png";
import multi from "../../public/multi.png";
import { Open_Sans } from "next/font/google";
import { viaodalibre } from "../../styles/fonts";

const opensans = Open_Sans({ subsets: ["cyrillic"] });

export default function Headerdesctop() {
  return (
    <div className={styles.main}>
      <div className={styles.imagestyle}>
        <Image src={thin} className={styles.imagethin} alt="picture" />
        <div style={{ width: "15px" }}></div>
        <Image src={multi} className={styles.imagemulti} alt="picture" />
      </div>

      <div className={styles.webname}>
        <p className={styles.jolanta} style={viaodalibre.style}>
          ЙОЛАНТА КЛЮСОВСЬКА
        </p>
        <p className={styles.sculptura} style={viaodalibre.style}>
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
