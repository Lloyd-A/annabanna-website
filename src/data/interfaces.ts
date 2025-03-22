import { StaticImageData } from "next/image";

export interface Tour {
  id: number;
  name: string;
  img: StaticImageData | string;
  overview: string;
  itemsToBring: string[];
  faqs: { question: string; answer: string }[];
}
