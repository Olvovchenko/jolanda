import Minipicture from "./minipicture";
import Text from "./text";

export default function Littleblock({ images, text }) {
  const [one, two] = images;
  return (
    <div>
      <Minipicture one={one} two={two} />

      <Text text={text} />
    </div>
  );
}
