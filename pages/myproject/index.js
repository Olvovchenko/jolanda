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
import golovnatrees from "../../Public/golovnatrees.jpg";

import Header from "../../Components/Header/header";
import Navbar from "../../Components/Navbar/navbar";
import Text from "../../Components/Text/text";
import PictureSinglereverse from "../../Components/Picturesinglereverse/picturesinglereverse";

import Minipicture from "../../Components/Minipicture/minipicture";
import PictureFour from "../../Components/Picturefour/picturefour";
import Picture from "../../Components/Picture/picture";
import Footer from "../../Components/Footer/footer";

export default function MyProject() {
  const inf = [
    {
      images: [dveriold, dveri],
      text: 'Ресторан "People Place", Львів',
      component: Picture,
    },
    {
      images: [littletreeold, littletree, gardennice],
      text: "Приватний сад",
      component: Picture,
    },
    {
      images: [bush, bushold],

      component: Picture,
    },
    {
      images: [pictureold, picturenew],
      text: 'Формуюча стрижка ялівця у стилі "Ніваки" ',
      component: Picture,
    },
    {
      images: [plantold, plant],
      text: `Підтримуюча стрижкка у формі спиралі. Салон краси "Карвацька. Б'юті"`,
      component: Picture,
    },
    {
      images: [housebush, housebushone],
      text: "Перше формування ялівця",
      component: Picture,
    },
    {
      images: [piano],
      text: "Приватна колекція топіарних кущів",
      component: PictureSinglereverse,
    },

    {
      images: [littlebushold, littlebush],
      text: 'Стрижка ялівця. Салон краси "Мартель", Львів',
      component: Picture,
    },
    {
      images: [manytreeold, manytreenew],
      text: "Формування живоплоту",
      component: Picture,
    },
    {
      images: [treeroundold, treeround],
      text: "Підтримуюча стрижка туї",
      component: Picture,
    },
    {
      images: [interesttreeold, interesttree],
      text: 'Ялівець у стилі "Ніваки" ',
      component: Picture,
    },
    {
      images: [doubletreeold, doubletree],
      text: "Підтримуюча стрижка ансамблю у вірменському дворику.Львів.",
      component: Picture,
    },
  ];

  return (
    <div>
      <Header />
      <Navbar />

      {inf.map(({ images, text, title, component: Component }) => (
        <Component images={images} text={text} title={title} key={images[0]} />
      ))}
      <Footer />
    </div>
  );
}
