import Minipicture from "../Minipicture/minipicture";
import Text from "../Text/text";

export default function Littleblockface({ images, text }) {
  const [one, two] = images;
  return (
    <div>
      <Minipicture one={one} two={two} />

      <Text text={text} />
    </div>
  );
}
