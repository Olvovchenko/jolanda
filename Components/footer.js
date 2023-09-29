import Image from "next/image";
import leaf from "../public/leafsmall.png";
import thin from "../public/free-icon-instagram-1077042.png";
import multi from "../public/free-icon-multimedia-2909344.png";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div
      id="cont"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className={styles.footicon}>
        <Image src={thin} width={15.43} height={16} alt="picture" />
        <div style={{ width: "10px" }}></div>
        <Image src={multi} width={18} height={18} alt="picture" />
      </div>

      <div style={{ font: "16px Inknut Antiqua" }}>INSTAGRAM</div>
      <div style={{ font: "20px Inknut Antiqua", marginTop: "34px" }}>
        <Image
          src={leaf}
          width={16}
          height={16}
          style={{ transform: "rotate(270deg" }}
        />
        +34 212 248 123 jolanta@gmail.com
      </div>
    </div>
  );
}
