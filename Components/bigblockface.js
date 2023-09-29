import Pictureface from "./pictureface";
import Text from "./text";

export default function Bigblockface({ images, text }) {
  const [one] = images;
  return (
    <div>
      <Pictureface one={one} />
      <Text text={text} />
    </div>
  );
}
