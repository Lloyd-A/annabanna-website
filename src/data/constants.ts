import { Tour } from "./interfaces";
import { JAM } from "@/assets";
export const tours: Tour[] = [
  {
    id: 1,
    name: "Dunn's River Falls",
    img: JAM,
    address: "Dunns+River+Falls+Tours",
    // address: "18.412509925483448, -77.13535912065143",
    overview:
      "Dunn's River Falls is one of Jamaica's most iconic and breathtaking natural attractions, offering a truly unforgettable experience for first-time visitors to the island. Located in Ocho Rios, this majestic waterfall cascades 180 feet down terraced limestone steps, leading into the warm, crystal-clear waters of the Caribbean Sea. The falls are surrounded by lush tropical vegetation, creating a picture-perfect backdrop for adventure and relaxation." +
      "What makes Dunns River Falls so unique is the opportunity to climb the falls  the help  experienced guides. As you scale the smooth, flowing rocks, youll feel the cool, refreshing water rushing past you, offering an exhilarating combination of adventure and natural beauty. The climb is suitable for all ages and skill levels, making it an ideal activity for families, couples, and solo travelers alike." +
      "If youre looking to take it easy, you can also lounge on the beach or wade the shallow pools at the base of the falls, soaking in the stunning surroundings. The area also features a variety of local vendors, where you can pick up souvenirs and enjoy authentic Jamaican snacks." +
      "Whether youre an adrenaline seeker or simply want to enjoy the serenity of one of Jamaica’s most famous natural wonders, Dunn's River Falls offers something for everyone. It’s a must-see destination that perfectly captures the island's vibrant culture and natural beauty. Don’t forget your camera – the views are unforgettable!",
    itemsToBring: [
      "Towels",
      "Swimwear",
      "Sunscreen",
      "Water shoes",
      "Underwater Camera",
      "Change of clothes or quick dry clothes",
    ],
    faqs: [
      {
        question: "What is AnnaBanna Tours?",
        answer: "AnnaBanna Tours offers premium guided tours around Jamaica...",
      },
      {
        question: "How do I book a tour?",
        answer:
          "You can book a tour directly through our website or by contacting our customer service for personalized assistance.",
      },
    ],
  },
  {
    id: 2,
    name: "Blue Mountain Hike",
    img: "/images/blue-mountain.jpg",
    address: "",
    overview: "Experience the breathtaking beauty of Blue Mountain...",
    itemsToBring: ["Hiking boots", "Water", "Backpack", "Snacks", "Camera"],
    faqs: [
      {
        question: "How long is the hike?",
        answer: "The hike typically lasts around 6-8 hours.",
      },
      {
        question: "Is it suitable for beginners?",
        answer: "Some experience with hiking is recommended.",
      },
    ],
  },
];

export const resorts = [
  "Sandals Dunn's River",
  "Riu Aquarelle",
  "Sandals Plantation",
  "Royalton",
  "Excellence",
  "Ocean Coral Springs",
];

export const pickupTimes = [
  "7:00 AM",
  "7:30 AM",
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
  "12:00 AM",
  "12:30 AM",
];

export const noOfPassengers = [1, 2, 3, 4, 5, 6, 7, 8];

// utils.ts

export const costConfig = {
  personMultiplier: 0.2, // Multiplier for every additional 2 people
  pickupTimeMultiplier: 1.2, // Multiplier for pickups after 8 PM

  // Base prices mapped by hotel and destination pair
  basePrices: {
    "Riu Aquarelle": {
      "Dunn's River Falls": 50,
      "Mountain Hike": 70,
      "City Tour": 40,
    },
    "Hotel B": {
      "Beach Tour": 60,
      "Mountain Hike": 80,
      "City Tour": 45,
    },
    "Hotel C": {
      "Beach Tour": 55,
      "Mountain Hike": 75,
      "City Tour": 50,
    },
  },
};
