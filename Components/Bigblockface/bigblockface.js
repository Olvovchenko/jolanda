import Pictureface from "../Pictureface/pictureface";
import Text from "../Text/text";

export default function Bigblockface({ images, text }) {
  const [one] = images;
  return (
    <div>
      <Pictureface one={one} />
      <Text text={text} />
    </div>
  );
}
