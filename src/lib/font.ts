import {
  Archivo_Black,
  DM_Sans,
  Mona_Sans,
  Noto_Sans_Balinese,
  Work_Sans,
} from "next/font/google";

export const monasans = Mona_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-monasans",
});

export const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  variable: "--font-dmsans",
});

export const archivoblack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivoblack",
});

export const bali = Noto_Sans_Balinese({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bali",
});

export const worksasns = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-worksans",
});
