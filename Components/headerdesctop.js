import Image from "next/image";
import styles from "./headerdesctop.module.css";
import thin from "../public/free-icon-instagram-1077042.png";
import multi from "../public/free-icon-multimedia-2909344.png";
import Navbar from "./navbar";

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
          }}
        >
          YOLANTA KLUSOVSKA
        </p>
        <p style={{ fontSize: "15px" }}>ЛАНДШАФТНИЙ ДИЗАЙН І САДІВНИЦТВО</p>
      </div>
      <div className={styles.langmenu}>
        <div>Espanol</div>
        <div style={{ width: 24 }}></div> <div>Ukrainian</div>
      </div>
    </div>
  );
}
