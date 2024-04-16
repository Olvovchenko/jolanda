import Link from "next/link";

import Header from "../../Components/Header/header";
import Navbar from "../../Components/Navbar/navbar";
import Image from "next/image";
import maisterclass from "../../Public/maisterclass.jpg";
import mastermain from "../../public/mastermain.jpg";
import Footer from "../../Components/Footer/footer";
import superclass from "../../Public/superclass.jpg";
import jolant from "../../Public/jolant.jpg";
import redtoy from "../../Public/redtoy.jpg";
import decor from "../../Public/decor.jpg";
import profil from "../../Public/profil.jpg";
import scissors from "../../Public/scissors.jpg";
import robotaplants from "../../Public/robotaplants.jpg";
import bushwork from "../../Public/bushwork.jpg";
import family from "../../Public/family.png";
import Mainpicture from "../../Components/Mainpicture/mainpicture";
import { useEffect, useRef } from "react";
import { useState } from "react";

import PictureRevers from "../../Components/Picturerevers/picturerevers";
import PictureDouble from "../../Components/Picturedouble/picturedouble";
import PictureSingle from "../../Components/Picturesingle/picturesingle";
import Picture from "../../Components/Picture/picture";
import Littleblockface from "../../Components/Picturedouble/picturedouble";
import styles from "./maisterka.module.css";

const inf = [
  {
    images: [mastermain],
    title: `Майстерклас зі спіральної стрижки`,
    text: `Пару годин роботи з ножницями -і звичайна рослинка перетворюється на витвір мистецтва. А ви отримуєте величезне задоволення і нові навички!`,
    component: PictureSingle,
  },
  {
    images: [bushwork],
    title: `Фігурна стрижка кущів. Тонкощі і нюанси`,
    text: `Гарні, доглянуті кущі стануть справжньою прикрасою вашого подвір'я. Спробуйте, і ви відчуєте, що таке справжнє диво!`,
    component: PictureSingle,
  },
  {
    images: [profil],
    title: `Ідеальна терраса`,
    text: `Як отримати радість від спілкування з природою, навіть не виходячи з дому? Дуже просто - облаштуйте свій балкон або террасу улюбленими квітами! Ваш настрій миттєво зміниться`,
    component: PictureSingle,
  },
  {
    images: [decor],
    title: `Різдвяні прикраси`,
    text: `Створити зимову казку самій - що може бути краще? Прикрась свою оселю і отримай справжній святковий настрій!`,
    component: PictureSingle,
  },
];

export default function Maisterka() {
  const [parallax, setParallax] = useState(0);

  const ref = useRef(null);

  const refContent = useRef(null);
  const refHeader = useRef(null);

  useEffect(() => {
    setParallax(ref.current.offsetHeight);
  }, []);

  return (
    <div ref={ref}>
      <div ref={refHeader}>
        <Header />
      </div>
      <Navbar />

      <Mainpicture
        one={maisterclass}
        parallax={parallax}
        content={refContent}
        header={refHeader}
      />

      <div ref={refContent} className={styles.refcontent}>
        {inf.map(({ images, title, text, component: Component }, i) => (
          <Component images={images} title={title} text={text} key={i} />
        ))}

        <Footer />
      </div>
    </div>
  );
}
