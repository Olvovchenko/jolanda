import Image from "next/image";
import { opensans } from "../../styles/fonts";
import leaf from "../../public/leafsmall.png";
import thin from "../../public/thin.png";
import multi from "../../public/multi.png";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div id="cont" className={styles.footmain}>
      <div className={styles.observe} style={opensans.style}>
        СЛІДКУЙ ЗА МНОЮ
      </div>
      <div className={styles.footicon}>
        <Image src={thin} className={styles.imagethin} alt="picture" />
        <div style={{ width: "10px" }}></div>
        <Image src={multi} className={styles.imagemulti} alt="picture" />
      </div>

      <div className={styles.instagram} style={opensans.style}>
        INSTAGRAM
      </div>
      <div className={styles.mailcontact} style={opensans.style}>
        <Image src={leaf} className={styles.imageleaf} />
        yolantafoto@gmail.com
      </div>
    </div>
  );
}
