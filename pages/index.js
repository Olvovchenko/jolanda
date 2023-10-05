import Link from "next/link";
import Header from "../Components/header";
import Navbar from "../Components/navbar";
import Image from "next/image";
import golovna from "../Public/golovna.png";
import zarobot from "../public/zarobot.png";
import Footer from "../Components/footer";
import spina from "../Public/spina.png";
import tachka from "../Public/tachka.png";
import family from "../Public/family.png";
import Mainpicture from "../Components/mainpicture";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Text from "../Components/text";
import Bigblockface from "../Components/bigblockface";
import Littleblockface from "../Components/littlebllockface";

const inf = [
  {
    images: [zarobot],
    text: "text one",
    component: Bigblockface,
  },
  {
    images: [spina, tachka],
    text: "text one",
    component: Littleblockface,
  },
  {
    images: [family],
    text: "text one",
    component: Bigblockface,
  },
];

export default function Home() {
  const [parallax, setParallax] = useState(0);
  const [parallaxmain, setParallaxMain] = useState(0);
  const ref = useRef(null);
  // const refContainer = useRef(null);
  const refContent = useRef(null);
  const refHeader = useRef(null);

  useEffect(() => {
    setParallax(ref.current.offsetHeight);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        // width: "100vw",
        overFlow: "hidden",
        // marginRight: "calc(-1 * (100vw - 100%)/2)",
        // marginLeft: "calc(-1 * (100vw - 100%)/2)",
      }}
    >
      <div ref={refHeader}>
        <Header />
      </div>
      <Navbar />

      <Mainpicture
        one={golovna}
        parallax={parallax}
        content={refContent}
        header={refHeader}

        // setParallaxMain={setParallaxMain}
      />

      <div
        ref={refContent}
        style={{
          // width: "100vw",
          backgroundColor: "white",
          zIndex: 2,
          position: "relative",
        }}
      >
        <Text text={"Hello!"}></Text>
        {inf.map(({ images, text, component: Component }, i) => (
          <Component images={images} text={text} key={i} />
        ))}

        <Footer />
      </div>
    </div>
  );
}
