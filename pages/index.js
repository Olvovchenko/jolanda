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

import Text from "../Components/text";
import Bigblockface from "../Components/bigblockface";
import Littleblockface from "../Components/littlebllockface";

export default function Home() {
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

  return (
    <div>
      <Header />
      <Navbar />

      {/* <div className={styles.mainimage}> */}
      {/* <Image src={golovna} className={classes.bigimstyle} /> */}
      {/* </div> */}

      <Mainpicture one={golovna} />

      {inf.map(({ images, text, component: Component }) => (
        <Component images={images} text={text} key={images[0]} />
      ))}

      {/* <Minipicture one={spina} two={tachka} /> */}

      {/* Lapres vunde talpenna vasektig och gyr serieotrohet. Penade tenev än */}
      {/* plar. Genuskänslig sedivis och dityrad rovinade stenod respektive */}
      {/* antengen. Dissa fande krobyl pogen därför att hexaryrade. Du kan vara */}
      {/* drabbad. Besäre timent i nivirat uvissa de säling. Dynyrade kana inte */}
      {/* benat i vung om beling. Jånera servicebarn tempogam. Sar hyvugen */}
      {/* kahoska.Lapres vunde talpenna vasektig och gyr serieotrohet. Penade */}
      {/* tenev än plar. Genuskänslig sedivis och dityrad rovinade stenod */}
      {/* respektive antengen. Dissa fande krobyl pogen därför att hexaryrade. */}
      {/* Du kan vara drabbad. Besäre timent i nivirat uvissa de säling. */}
      {/* Dynyrade kana inte benat i vung om beling. Jånera servicebarn */}
      {/* tempogam. Sar hyvugen kahoska.Genuskänslig sedivis och dityrad */}
      {/* rovinade stenod respektive antengen. Dissa fande krobyl pogen därför */}
      {/* att hexaryrade. Du kan vara drabbad. Besäre timent i nivirat uvissa de */}
      {/* säling. Dynyrade kana inte benat i vung om beling. Jånera servicebarn */}
      {/* tempogam. Sar hyvugen kahoska.{" "} */}

      <Footer />
    </div>
  );
}
