"use client";

import { TOURS_HERO } from "@/assets";
import Image from "next/image";
import { tours } from "@/data/constants";
import TourCard from "@/components/TourCard";
import Hover from "@/components/Hover";

export default function ToursPage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[36rem]">
        {/* Background Image */}
        <Image
          src={TOURS_HERO}
          alt="Tours hero image"
          className="z-0 w-full h-full object-cover"
        />
      </div>

      <div className="relative bg-gray-200">
        <Hover color="#fde047" delay={0.2} size={10}>
          <div className="w-full px-4 sm:px-2 md:px-4 lg:px-4">
            <div
              id="tour-cards"
              className="relative grid place-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 sm:px-4 md:px-8 py-20 max-w-screen-xl mx-auto"
            >
              <TourCard tour={tours[0]} />
              <TourCard tour={tours[0]} />
              <TourCard tour={tours[0]} />
              <TourCard tour={tours[0]} />
              <TourCard tour={tours[0]} />
              <TourCard tour={tours[0]} />
            </div>
          </div>
        </Hover>
      </div>
    </div>
  );
}
