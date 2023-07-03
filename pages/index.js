import Link from "next/link";
import Header from "../Components/header";
import Image from "next/image";
import golovna from "../Public/golovna.png";
import zarobot from "../Public/zarobot.png";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import styles from "../styles/globalstyles.module.css";
import spina from "../Public/spina.png";
import tachka from "../Public/tachka.png";
import family from "../Public/family.png";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className={styles.imageblock}>
        <Image src={golovna} width={1111} height={615} />
      </div>
      <div className={styles.textaround}>
        <p className={styles.textjolanta}>
          Lapres vunde talpenna vasektig och gyr serieotrohet. Penade tenev än
          plar. Genuskänslig sedivis och dityrad rovinade stenod respektive
          antengen. Dissa fande krobyl pogen därför att hexaryrade. Du kan vara
          drabbad. Besäre timent i nivirat uvissa de säling. Dynyrade kana inte
          benat i vung om beling. Jånera servicebarn tempogam. Sar hyvugen
          kahoska.Lapres vunde talpenna vasektig och gyr serieotrohet. Penade
          tenev än plar. Genuskänslig sedivis och dityrad rovinade stenod
          respektive antengen. Dissa fande krobyl pogen därför att hexaryrade.
          Du kan vara drabbad. Besäre timent i nivirat uvissa de säling.
          Dynyrade kana inte benat i vung om beling. Jånera servicebarn
          tempogam. Sar hyvugen kahoska.Genuskänslig sedivis och dityrad
          rovinade stenod respektive antengen. Dissa fande krobyl pogen därför
          att hexaryrade. Du kan vara drabbad. Besäre timent i nivirat uvissa de
          säling. Dynyrade kana inte benat i vung om beling. Jånera servicebarn
          tempogam. Sar hyvugen kahoska.{" "}
        </p>
      </div>
      <div className={styles.imageblock}>
        <Image src={zarobot} width={1111} height={615} />
      </div>
      <div className={styles.textaround}>
        <p className={styles.textjolanta}>
          Lapres vunde talpenna vasektig och gyr serieotrohet. Penade tenev än
          plar. Genuskänslig sedivis och dityrad rovinade stenod respektive
          antengen. Dissa fande krobyl pogen därför att hexaryrade. Du kan vara
          drabbad. Besäre timent i nivirat uvissa de säling. Dynyrade kana inte
          benat i vung om beling. Jånera servicebarn tempogam. Sar hyvugen
          kahoska.Lapres vunde talpenna vasektig och gyr serieotrohet. Penade
          tenev än plar. Genuskänslig sedivis och dityrad rovinade stenod
          respektive antengen. Dissa fande krobyl pogen därför att hexaryrade.
          Du kan vara drabbad. Besäre timent i nivirat uvissa de säling.
          Dynyrade kana inte benat i vung om beling. Jånera servicebarn
          tempogam. Sar hyvugen kahoska.Genuskänslig sedivis och dityrad
          rovinade stenod respektive antengen. Dissa fande krobyl pogen därför
          att hexaryrade. Du kan vara drabbad. Besäre timent i nivirat uvissa de
          säling. Dynyrade kana inte benat i vung om beling. Jånera servicebarn
          tempogam. Sar hyvugen kahoska.{" "}
        </p>
      </div>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "1111px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Image src={spina} width={522} height={612.27} />
        <Image src={tachka} height={612.27} />
      </div>
      <div className={styles.textaround}>
        <p className={styles.textjolanta}>
          Lapres vunde talpenna vasektig och gyr serieotrohet. Penade tenev än
          plar. Genuskänslig sedivis och dityrad rovinade stenod respektive
          antengen. Dissa fande krobyl pogen därför att hexaryrade. Du kan vara
          drabbad. Besäre timent i nivirat uvissa de säling. Dynyrade kana inte
          benat i vung om beling. Jånera servicebarn tempogam. Sar hyvugen
          kahoska.Lapres vunde talpenna vasektig och gyr serieotrohet. Penade
          tenev än plar. Genuskänslig sedivis och dityrad rovinade stenod
          respektive antengen. Dissa fande krobyl pogen därför att hexaryrade.
          Du kan vara drabbad. Besäre timent i nivirat uvissa de säling.
          Dynyrade kana inte benat i vung om beling. Jånera servicebarn
          tempogam. Sar hyvugen kahoska.Genuskänslig sedivis och dityrad
          rovinade stenod respektive antengen. Dissa fande krobyl pogen därför
          att hexaryrade. Du kan vara drabbad. Besäre timent i nivirat uvissa de
          säling. Dynyrade kana inte benat i vung om beling. Jånera servicebarn
          tempogam. Sar hyvugen kahoska.{" "}
        </p>
      </div>
      <div className={styles.imageblock}>
        <Image src={family} width={1111} height={615} />
      </div>
      <div className={styles.textaround}>
        <p className={styles.textjolanta}>
          Lapres vunde talpenna vasektig och gyr serieotrohet. Penade tenev än
          plar. Genuskänslig sedivis och dityrad rovinade stenod respektive
          antengen. Dissa fande krobyl pogen därför att hexaryrade. Du kan vara
          drabbad. Besäre timent i nivirat uvissa de säling. Dynyrade kana inte
          benat i vung om beling. Jånera servicebarn tempogam. Sar hyvugen
          kahoska.Lapres vunde talpenna vasektig och gyr serieotrohet. Penade
          tenev än plar. Genuskänslig sedivis och dityrad rovinade stenod
          respektive antengen. Dissa fande krobyl pogen därför att hexaryrade.
          Du kan vara drabbad. Besäre timent i nivirat uvissa de säling.
          Dynyrade kana inte benat i vung om beling. Jånera servicebarn
          tempogam. Sar hyvugen kahoska.{" "}
        </p>
      </div>

      <Footer />
    </div>
  );
}
