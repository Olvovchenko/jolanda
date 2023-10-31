import Minipicture from "../Minipicture/minipicture";
import Text from "../Text/text";
import Title from "../Title/title";

export default function PictureFour({ images, title, text }) {
  const [one, two, three, four] = images;
  return (
    <div>
      <Title title={title} />
      <Text text={text} />
      <Minipicture one={one} two={two} />
      <Minipicture one={three} two={four} />
    </div>
  );
}
