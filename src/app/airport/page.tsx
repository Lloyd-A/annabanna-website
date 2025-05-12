"use client";

import Image from "next/image";
import { PLANE } from "@/assets";
import AirportSelector from "@/components/AirportSelector";
import Hover from "@/components/Hover";
import { useScreenSize } from "@/hooks/useScreenSize";

const AirportTransfers = () => {
  const screenSize = useScreenSize();
  return (
    <div className="relative w-full">
      <div className="relative w-full h-60 md:h-150">
        {/* Background Image */}
        <Image
          src={PLANE}
          alt="Tours hero image"
          className="z-0 w-full h-full object-cover"
        />
      </div>
      <div className="relative bg-gray-200">
        <Hover color="#fde047" delay={0.2} size={10}>
          <div className="flex flex-col gap-10 items-center justify-center px-10 py-10">
            <p className="text-4xl font-extrabold">Choose Your Airport</p>
            <AirportSelector />
          </div>
        </Hover>
      </div>
    </div>
  );
};

export default AirportTransfers;
