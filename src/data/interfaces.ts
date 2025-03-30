import { StaticImageData } from "next/image";

export interface Tour {
  id: number;
  name: string;
  img: StaticImageData | string;
  address: string;
  overview: string;
  itemsToBring: string[];
  faqs: { question: string; answer: string }[];
}

export interface AirportTransfer {
  id: number;
  name: string;
  img: StaticImageData | string;
  address: string;
  overview: string;
  itemsToBring: string[];
  faqs: { question: string; answer: string }[];
}
