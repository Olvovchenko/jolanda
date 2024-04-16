import Link from "next/link";

import Header from "../../Components/Header/header";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/footer";
import Image from "next/image";
import article from "../../Public/article.jpg";
import eden from "../../public/eden.png";
import powrot from "../../public/powrot.png";
import texteden from "../../public/texteden.png";
import nagoroda from "../../public/nagoroda.jpg";
import ivfranka from "../../public/ivfranka.jpg";
import kiparis from "../../public/kiparis.jpg";
import womenflower from "../../public/womenflower.jpg";
import newmaister from "../../public/newmaister.jpg";

import PictureFour from "../../Components/Picturefour/picturefour";

import Picture from "../../Components/Picture/picture";

const inf = [
  {
    images: [powrot, texteden, article, eden],
    // title: `Публікація в польському журналі`,
    text: `Публікація в польскому журналі.Як садівництво і топіарна скульптура допомагли мені позбутись депресії і тривоги під час війни`,
    component: PictureFour,
  },

  {
    images: [kiparis, womenflower, newmaister],
    // title: `Майстреклас:фігурна стрижка кіпарису`,
    text: `В грудні 2021 року відбувся мій авторський майстерклас "Фігурна стрижка кіпарису". Учні вчились правильно тримати інструменти, надавати форму і правильно працювати з рослинами`,
    component: Picture,
  },
];

// images: [nagoroda],
// title: `Найкраще подвір'я.`,
// text: `У 2016 році я отримала винагороду за найкраще подвір'я у м. Львові. У свому дворі я засадила різноманітні квіти і рослини`,
// component: Bigblockface,
// },
// {
// images: [ivfranka],
// title: `Майстерклас по садівництву у парку Ів. Франка м.Львів`,
// text: `Будучи головним садівником парку Ів. Франка я отримала пропозицію провести майстерклас для інших садівників-початківців. Все вийшло дуже добре`,
// component: Bigblockface,

export default function Achieve() {
  return (
    <div>
      <Header />
      <Navbar />
      <div style={{ backgroundColor: "lightgrey", marginTop: "25px" }}>
        {inf.map(({ images, title, text, component: Component }) => (
          <Component images={images} title={title} text={text} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
