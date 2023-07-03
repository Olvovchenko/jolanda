import Image from "next/image";
import styles from "./header.module.css";
import thin from "../public/free-icon-instagram-1077042.png";
import multi from "../public/free-icon-multimedia-2909344.png";

export default function Header() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.imagestyle}>
          <Image src={thin} width={15.43} height={16} alt="picture" />
          <div style={{ width: "15px" }}></div>
          <Image src={multi} width={18} height={18} alt="picture" />
        </div>

        <div className={styles.webname}>
          <p
            style={{
              marginBottom: "10px",
            }}
          >
            YOLANTA KLUSOVSKA
          </p>
          <p style={{ font: "16px Inknut Antiqua" }}>
            ЛАНДШАФТНИЙ ДИЗАЙН І САДІВНИЦТВО
          </p>
        </div>
        <div className={styles.langmenu}>
          <div>Espanol</div>
          <div style={{ width: 24 }}></div> <div>Ukrainian</div>
        </div>
      </div>
    </div>
  );
}
