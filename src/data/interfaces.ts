export interface Tour {
  id: number;
  name: string;
  img: string;
  overview: string;
  itemsToBring: string[];
  faqs: { question: string; answer: string }[];
}
