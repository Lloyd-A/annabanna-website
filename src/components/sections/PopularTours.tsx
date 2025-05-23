"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import Image from "next/image";
import { JAM, JAM_INN, HOPE, RIU, BOB } from "@/assets";
import { useScreenSize } from "@/hooks/useScreenSize";

const tourData = [
  {
    id: 1,
    name: "Dunn's River Falls",
    image: JAM,
  },
  {
    id: 2,
    name: "Blue Hole",
    image: JAM_INN,
  },
  {
    id: 3,
    name: "Rick's Cafe",
    image: HOPE,
  },
  {
    id: 4,
    name: "Bob Marley Museum",
    image: BOB,
  },
  {
    id: 5,
    name: "YS Falls",
    image: RIU,
  },
];

export default function PopularTours() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + tourData.length) % tourData.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tourData.length);
  };

  const screenSize = useScreenSize();

  useEffect(() => {
    setCurrentIndex(0);
  }, [screenSize]);

  const getVisibleItems = () => {
    const itemsToShow = screenSize < 640 ? 1 : 3;

    return Array.from(
      { length: itemsToShow },
      (_, i) => tourData[(currentIndex + i) % tourData.length]
    );
  };

  // const getVisibleItems = () => {
  //   return [
  //     tourData[currentIndex],
  //     tourData[(currentIndex + 1) % tourData.length],
  //     tourData[(currentIndex + 2) % tourData.length],
  //   ];
  // };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <h2 className="pt-10 text-3xl font-bold text-center mb-6 animate-fade-in drop-shadow-md">
        Most Popular Tours
      </h2>
      <div className="relative flex items-center justify-center">
        <Button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 bg-black/60 text-white rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="flex w-full gap-4 px-4 justify-center relative">
          {getVisibleItems().map((tour) => (
            <div
              key={tour.id}
              className={`flex-shrink-0 p-2 ${
                screenSize < 640 ? "w-full max-w-sm mx-auto" : "w-1/3"
              }`}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-60 sm:h-64 object-cover rounded-xl hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-3 text-base font-semibold">
                  {tour.name}
                  <Button
                    variant="ghost"
                    className="absolute top-2 right-2 text-white hover:bg-white/20"
                  >
                    <Info className="w-5 h-5" />
                    More Info
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 bg-black/60 text-white rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <p className="flex items-center justify-center text-center text-lg font-bold pb-10 px-2">
        Experience the beauty of Jamaica with some of the most popular and
        sought after tours
      </p>
    </div>
  );
}
