import Minipicture from "./minipicture";
import Text from "./text";

export default function Littleblock({ images, text }) {
  const [one, two, three, four] = images;
  return (
    <div>
      <Minipicture one={one} two={two} />
      <Minipicture one={three} two={four} />
      <Text text={text} />
    </div>
  );
}
