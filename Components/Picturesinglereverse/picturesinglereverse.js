import styles from "./picturesinglereverse.module.css";
import Image from "next/image";
import Text from "../Text/text";
import Title from "../Title/title";

export default function PictureSinglereverse({ images, text, title }) {
  const [one] = images;

  return (
    <div style={{ width: "100%" }}>
      <div className={styles.bigimage}>
        <Image src={one} className={styles.bigimstyle} />
      </div>
      <Title title={title} />
      <Text text={text} />
    </div>
  );
}
