import Picture from "../Picture/picture";
import Text from "../Text/text";

export default function Bigblock({ images, text }) {
  const [one, two, three] = images;
  return (
    <div>
      <Picture one={one} two={two} three={three} />

      <Text text={text} />
    </div>
  );
}
