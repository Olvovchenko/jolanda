import Text from "../Text/text";
import styles from "./list.module.css";

export default function List({ list }) {
  return (
    <ul className={styles.liststyle}>
      {list.map((t, i) => (
        <li>
          <Text text={t} key={i} />
        </li>
      ))}
    </ul>
  );
}
