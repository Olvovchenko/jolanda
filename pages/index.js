import Link from "next/link";
import { cormorantgaramond, opensans, viaodalibre } from "../styles/fonts";
import Header from "../Components/Header/header";
import Navbar from "../Components/Navbar/navbar";
import Image from "next/image";
import golovnatrees from "../Public/golovnatrees.jpg";
import zarobot from "../public/zarobot.png";
import Footer from "../Components/Footer/footer";
import spina from "../Public/spina.png";
import tachka from "../Public/tachka.png";
import family from "../Public/family.png";
import Mainpicture from "../Components/Mainpicture/mainpicture";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Text from "../Components/Text/text";
import PictureSingle from "../Components/Picturesingle/picturesingle";
import PictureDouble from "../Components/Picturedouble/picturedouble";
import styles from "./parallax.module.css";

const inf = [
  {
    images: [zarobot],
    text: `Сіла за комп. Віднайшла давні фото, з саду моїх діда й бабці, де я навистригала з самшиту величезні кулі і чудернацькі форми. Тоді мені було 14. Дивне захоплення у підлітка, правда? Тим не менше мене то страшно захоплювало. 
    А далі понеслося. Перший допис у фб та інста. Перший клієнт. І пам'ятаю, як я принесла реальну пачку грошей  додому. Це було щось! Емоції та азарт мене підхопили і рухали далі, вперед.`,
    component: PictureSingle,
  },
  {
    images: [spina, tachka],
    text: `Потім ставало ще більше садів, де я з жагою працювала до 10 год за день. Це і роботою не називається, а моє старе нове захоплення -  вистригання кущів у різні форми, скульптурне садівництво, або ще як його називають топіарне мистецтво. Стригти кущі, скажу я тобі, це одне задоволення,  медитація, бо думки дурні кудить щезають, а приємні приходять. Торкаєшся рослини і відчуваєш таку приємність, аж мимоволі усміхаєшся. Куди не глянь -  природа, стрижеш собі в красивих садах і купаєшся в тому дзені. Хіба не про це я мріяла?! Захоплення, яке приносить сатисфакцію, приплив енергії, матеріальну винагороду, свободу, пізнання внутрішнього світу, зустріч з цікавими людьми і навіть подорожі. `,
    component: PictureDouble,
  },
  {
    images: [family],
    text: `Гаразд, розкажу, де я ще працювала. 

    Пам'ятаю як в липні до мене несподівано зателефонували, а я стою у ванній з намиленою головою.  Так от дівчина представилася, що вона з міської ради Львова, бачили б ви тоді мій вираз обличчя))), запиталася мене чи я не проти знятися для їхнього ролику в передвиборчій кампанії мера для проекту озеленення Львова. На що я погодилася. Далі було запрошення від департаменту екології на посаду садівника парку Ів.Франка у Львові та приєднатися до команди садівників Львова. За що я щиро вдячна моїй шефовій Олександрі.  Мої перші 11га, які мені пощастило доглядати. Щасливий рік в класній команді садівників. 
    
    Ось так я відкрила забуті мною двері у світ садівництва. 
    
    Звати мене  Йоланта. Вправно володію ножицями та ліплю форми з рослин. Майстер топіарної стрижки, модель, мисткиня. Надихаю і закохую у сад. 
    
    Навчалася на курсі пермакультурного садівництва "Фруктовий ліс" в м Коїн (Малага) Іспанія
    Участь у з'їзді Арбористів у Львові.
    Участь в майстеркласі від майстра топіару Олексія Бордуся в Києві.
    
    
    
    Провела майстерку  зі стрижки кущів в парку Франка (Львів)  для молоді з особливими потребами з центру Емаус. 
    
    Оранізувала майстер-клас з топіарної стрижки, Львів.
    Головний садівник парку І. Франка у Львові. 
    
    Я мама двох люблячих дітей Ян і Леон, який має синдром Дауна. Живемо ми в Іспанії в горах Sierra de Gredos. 
    
    Тож ласкаво прошу на мій сайт. 
    
    Для контакту зі мною пишіть сюди yolantafoto@gmail.com`,
    component: PictureSingle,
  },
];

export default function Home() {
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
        one={golovnatrees}
        parallax={parallax}
        content={refContent}
        header={refHeader}
      />

      <div ref={refContent} className={styles.refcontent}>
        <p className={styles.title}>ІСТОРІЯ ПРО МРІЇ І САДІВНИЦТВО</p>
        <Text
          text={`...Я згадала, що за моєю шафою лежать ножиці. Схожі на ті, які мені подарував колись мій дідо. Це був час, період пандемії,  коли я залишилась без заробітку, без грошей, від слова зовсім. Тоді мені прийшла думка взяти листок паперу і написати ВСІ мої вміння будь- які, якими я володію. Писала все: від фотографування, роблення меблів до випікання тістечок. І тут я помічаю, як рука виписує "вмію стригти кущі". Матір божа, я ж зовсім забула про це! 
Такі відчуття ніби виграла джек пот.`}
        ></Text>
        {inf.map(({ images, text, title, component: Component }, i) => (
          <Component images={images} title={title} text={text} key={i} />
        ))}

        <Footer />
      </div>
    </div>
  );
}
