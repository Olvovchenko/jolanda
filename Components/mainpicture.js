import { useRef, useEffect } from "react";
import styles from "./picture.module.css";
import Image from "next/image";
import { isForStatement } from "typescript";
const thresholdSets = [];
for (let i = 0; i <= 1; i += 0.005) {
  thresholdSets.push(i);
}

export default function Mainpicture({
  one,
  parallax,
  content,
  header,
  // setParallaxMain,
  // refcontainer,
}) {
  const main = useRef(null);

  useEffect(() => {
    function setParallaxItemStyle(scrollTopProcent, scrollY) {
      if (main.current) {
        main.current.style.cssText = `transform: translate(0%, -${
          scrollTopProcent / 2
        }%);`;
      }
    }
    // setParallaxMain(main.current.offsetHeight);
    const callback = function (entries, observer) {
      const scrollTopProcent = (window.scrollY / parallax) * 100;
      console.log(
        "scrollTopProcent",
        scrollTopProcent,
        window.scrollY,
        parallax
      );
      setParallaxItemStyle(scrollTopProcent, window.scrollY);
    };
    const observer = new IntersectionObserver(callback, {
      threshold: thresholdSets,
    });

    observer.observe(content.current);
    observer.observe(header.current);
    return () => {
      content.current && observer.unobserve(content.current);
      header.current && observer.unobserve(header.current);
      observer.disconnect();
    };
  }, [parallax]);

  return (
    <div className={styles.mainimage}>
      <Image src={one} className={styles.mainimstyle} ref={main} />
    </div>
  );
}
