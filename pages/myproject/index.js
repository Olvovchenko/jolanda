import Link from "next/link";
import Image from "next/image";
import bushold from "../../Public/bushold.png";
import bush from "../../Public/bush.png";
import dveriold from "../../Public/dveriold.png";
import dveri from "../../Public/dveri.png";
import housebush from "../../Public/housebush.png";
import housebushone from "../../Public/housebushone.png";
import treeroundold from "../../Public/treeroundold.png";
import treeround from "../../Public/treeround.png";
import plant from "../../Public/plant.png";
import plantold from "../../Public/plantold.png";
import littlebush from "../../Public/littlebush.png";
import littlebushold from "../../Public/littlebushold.png";
import littletree from "../../Public/littletree.png";
import littletreeold from "../../Public/littletreeold.png";
import picturenew from "../../Public/picturenew.png";
import pictureold from "../../Public/pictureold.png";
import manytreenew from "../../Public/manytreenew.png";
import manytreeold from "../../Public/manytreeold.png";
import interesttree from "../../Public/interesttree.png";
import interesttreeold from "../../Public/interesttreeold.png";
import doubletree from "../../Public/doubletree.png";
import doubletreeold from "../../Public/doubletreeold.png";
import gardennice from "../../Public/gardennice.png";
import piano from "../../Public/piano.png";
import street from "../../Public/street.jpg";

import Header from "../../Components/header";
import Navbar from "../../Components/navbar";
import Text from "../../Components/text";

import Picture from "../../Components/picture";
import Minipicture from "../../Components/minipicture";
import Littleblock from "../../Components/littleblock";
import Bigblock from "../../Components/bigblock";

export default function MyProject() {
  const inf = [
    {
      images: [dveriold, dveri, littletreeold, littletree],
      text: "text one",
      component: Littleblock,
    },
    {
      images: [bushold, bush, gardennice],
      text: "text one",
      component: Bigblock,
    },
    {
      images: [pictureold, picturenew, plantold, plant],
      text: "text one",
      component: Littleblock,
    },
    {
      images: [housebush, housebushone, piano],
      text: "text one",
      component: Bigblock,
    },
    {
      images: [littlebushold, littlebush, manytreeold, manytreenew],
      text: "text one",
      component: Littleblock,
    },
    {
      images: [treeroundold, treeround, street],
      text: "text one",
      component: Bigblock,
    },
    {
      images: [interesttreeold, interesttree, doubletreeold, doubletree],
      text: "text one",
      component: Littleblock,
    },
  ];
  // {
  // images: [dveri, littletreeold],
  // text: "text two",
  // },
  // {
  // one: dveriold,
  // two: dveri,
  // three: littletreeold,
  // four: littletree,
  // text: "Lapres vunde talpenna vasektig och gyr serieotrohet. Penade tene",
  // },
  // ];
  // `Sar hyvugen kahoska.Lapres vunde talpenna vasektig och gyr serieotrohet.
  // Penade tenev än plar. Genuskänslig sedivis och dityrad rovinade stenod
  // respektive antengen. Dissa fande krobyl pogen därför att hexaryrade.
  // Du kan vara drabbad. Besäre timent i nivirat uvissa de säling.
  // Dynyrade kana inte benat i vung om beling. Jånera servicebarn
  // tempogam. Sar hyvugen kahoska.Genuskänslig sedivis och dityrad
  // rovinade stenod respektive antengen. Dissa fande krobyl pogen därför
  // att hexaryrade. Du kan vara drabbad. Besäre timent i nivirat uvissa de
  // säling. Dynyrade kana inte benat i vung om beling. Jånera servicebarn
  // tempogam. Sar hyvugen kahoska.`,
  // `Lapres vunde talpenna vasektig och gyr serieotrohet. Penade tenev
  // plar. Genuskänslig sedivis och dityrad rovinade stenod respektive
  // antengen. Dissa fande krobyl pogen därför att hexaryrade. Du kan vara
  // drabbad. Besäre timent i nivirat uvissa de säling. Dynyrade kana inte
  // benat i vung om beling. Jånera servicebarn tempogam. `,

  return (
    <div>
      <Header />
      <Navbar />

      {inf.map(({ images, text, component: Component }) => (
        <Component images={images} text={text} key={images[0]} />
      ))}

      {/* <Picture one={bush} two={bushold} three={gardennice} /> */}
      {/* <Text text={inf[1]} /> */}
      {/* <Minipicture one={pictureold} two={picturenew} /> */}
      {/* <Minipicture one={plantold} two={plant} /> */}
      {/* <Text text={inf[2]} /> */}
      {/* <Picture one={housebush} two={housebushone} three={piano} /> */}
      {/* <Text text={inf[3]} /> */}
      {/* <Minipicture one={littlebushold} two={littlebush} /> */}
      {/* <Minipicture one={manytreeold} two={manytreenew} /> */}
      {/* <Text text={inf[4]} /> */}
      {/* <Picture one={treeroundold} two={treeround} three={street} /> */}
      {/* <Text text={inf[5]} /> */}
      {/* <Minipicture one={interesttreeold} two={interesttree} /> */}
      {/* <Minipicture one={doubletreeold} two={doubletree} /> */}
      {/* <Text text={inf[6]} /> */}
    </div>
  );
}
