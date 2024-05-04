import styles from "./picture.module.css";
import Image from "next/image";
import Title from "../Title/title";
import Text from "../Text/text";

export default function Picture({ images, title, text }) {
  const [one, two, three] = images;
  return (
    <div>
      <div className={styles.littleimage}>
        <Image src={one} className={styles.imstyle} />
        <Image src={two} className={styles.imstyle} />
      </div>

      <div className={styles.bigimage}>
        <Image src={three} className={styles.bigimstyle} />
      </div>
      <Title title={title} />
      <Text text={text} />
    </div>
  );
}
