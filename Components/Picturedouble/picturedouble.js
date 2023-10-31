import Minipicture from "../Minipicture/minipicture";
import Text from "../Text/text";
import Title from "../Title/title";

export default function PictureDouble({ images, title, text }) {
  const [one, two] = images;
  return (
    <div>
      <Title title={title} />
      <Text text={text} />
      <Minipicture one={one} two={two} />
    </div>
  );
}
