"use client";

import { MBJ } from "@/assets";
import TourTabs from "@/components/TourTabs";
import { airports } from "@/data/constants";
import { AirportTransfer } from "@/data/interfaces";
import Image from "next/image";
import { use } from "react";

export default function AirportTransferPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const transferId = parseInt(use(params).id);
  const excursion = airports.find(
    (e) => e.id === transferId
  ) as AirportTransfer;
  return (
    <div className="relative w-full">
      <div className="relative w-full h-150">
        {/* Background Image */}
        <Image
          src={excursion.img}
          alt="Beautiful Jamaican Scenery"
          className="z-0 w-full h-full object-cover"
        />
      </div>
      <div>
        <TourTabs excursion={excursion} />
      </div>
    </div>
  );
}
