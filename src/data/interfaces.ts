import { StaticImageData } from "next/image";

export interface Tour {
  id: number;
  name: string;
  img: StaticImageData | string;
  address: string;
  overview: string;
  activities?: {
    label: string;
    icon: React.ElementType;
  }[];
  itemsToBring: string[];
  faqs: { question: string; answer: string }[];
}

export interface AirportTransfer {
  id: number;
  name: string;
  img: StaticImageData | string;
  address: string;
  overview: string;
  activities?: {
    label: string;
    icon: React.ElementType;
  }[];
  itemsToBring: string[];
  faqs: { question: string; answer: string }[];
}

export type TourPrices = {
  [tourDestination: string]: number;
};

export type BasePrices = {
  "Riu Aquarelle": TourPrices;
  "Hotel B": TourPrices;
  "Hotel C": TourPrices;
};
