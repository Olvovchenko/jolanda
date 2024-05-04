import styles from "./picturesingle.module.css";
import Image from "next/image";
import Text from "../Text/text";
import Title from "../Title/title";

export default function PictureSingle({ images, text, title }) {
  const [one] = images;

  return (
    <div style={{ width: "100%" }}>
      <Title title={title} />
      <Text text={text} />
      <div className={styles.bigimage}>
        <Image src={one} className={styles.bigimstyle} />
      </div>
    </div>
  );
}