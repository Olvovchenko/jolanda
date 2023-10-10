import Image from "next/image";
import leaf from "../../public/leafsmall.png";
import thin from "../../public/thin.png";
import multi from "../../public/multi.png";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div id="cont" className={styles.footmain}>
      <div className={styles.footicon}>
        <Image src={thin} className={styles.imagethin} alt="picture" />
        <div style={{ width: "10px" }}></div>
        <Image src={multi} className={styles.imagemulti} alt="picture" />
      </div>

      <div className={styles.instagram}>INSTAGRAM</div>
      <div className={styles.mailcontact}>
        <Image src={leaf} className={styles.imageleaf} />
        +34 212 248 123 yolantafoto@gmail.com
      </div>
    </div>
  );
}
