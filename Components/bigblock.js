import Picture from "./picture";
import Text from "./text";

export default function Bigblock({ images, text }) {
  const [one, two, three] = images;
  return (
    <div>
      <Picture one={one} two={two} three={three} />

      <Text text={text} />
    </div>
  );
}
