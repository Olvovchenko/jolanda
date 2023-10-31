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

import Header from "../../Components/Header/header";
import Navbar from "../../Components/Navbar/navbar";
import Text from "../../Components/Text/text";

import Minipicture from "../../Components/Minipicture/minipicture";
import PictureFour from "../../Components/Picturefour/picturefour";
import Picture from "../../Components/Picture/picture";
import Footer from "../../Components/Footer/footer";

export default function MyProject() {
  const inf = [
    {
      images: [dveriold, dveri, littletreeold, littletree],
      // text: "text one",
      component: PictureFour,
    },
    {
      images: [bush, bushold, gardennice],
      text: "text one",
      component: Picture,
    },
    {
      images: [pictureold, picturenew, plantold, plant],
      text: "text one",
      component: PictureFour,
    },
    {
      images: [housebush, housebushone, piano],
      text: "text one",
      component: Picture,
    },
    {
      images: [littlebushold, littlebush, manytreeold, manytreenew],
      text: "text one",
      component: PictureFour,
    },
    {
      images: [treeroundold, treeround, street],
      text: "text one",
      component: Picture,
    },
    {
      images: [interesttreeold, interesttree, doubletreeold, doubletree],
      text: "text one",
      component: PictureFour,
    },
  ];

  return (
    <div>
      <Header />
      <Navbar />

      {inf.map(({ images, text, component: Component }) => (
        <Component images={images} text={text} key={images[0]} />
      ))}
      <Footer />
    </div>
  );
}
