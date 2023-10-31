import { Cormorant_Garamond, Open_Sans, Viaoda_Libre } from "next/font/google";

const cormorantgaramond = Cormorant_Garamond({
  subsets: ["cyrillic"],
  weight: "500",
});
const opensans = Open_Sans({ subsets: ["cyrillic"], weight: "400" });
const viaodalibre = Viaoda_Libre({ subsets: ["cyrillic"], weight: "400" });

export { cormorantgaramond, opensans, viaodalibre };
