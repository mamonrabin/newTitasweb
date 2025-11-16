import { Exo, Inter,Figtree } from "next/font/google";

export const exo = Exo({
  subsets: ["latin"],
  weight: ["100","300","400","500","600", "700","800","900"],
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["100","200", "300", "400", "500", "700", "800", "900"],
  display: "swap",
});
export const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
});
