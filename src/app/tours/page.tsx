"use client";

import { TOURS_HERO } from "@/assets";
import Image from "next/image";
import { tours } from "@/data/constants";
import TourCard from "@/components/TourCard";
import Hover from "@/components/Hover";

export default function ToursPage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-150">
        {/* Background Image */}
        <Image
          src={TOURS_HERO}
          alt="Tours hero image"
          className="z-0 w-full h-full object-cover"
        />
      </div>

      <div className="relative bg-gray-200">
        <Hover color="#fde047" delay={0.2} size={10}>
          <div
            id="tour-cards"
            className="relative flex flex-wrap gap-8 px-80 py-20"
          >
            <TourCard tour={tours[0]} />
            <TourCard tour={tours[0]} />
            <TourCard tour={tours[0]} />
            <TourCard tour={tours[0]} />
            <TourCard tour={tours[0]} />
            <TourCard tour={tours[0]} />
          </div>
        </Hover>
      </div>
    </div>
  );
}
