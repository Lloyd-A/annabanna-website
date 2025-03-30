"use client";
import Image from "next/image";
import { tours } from "@/data/constants";
import TourTabs from "@/components/TourTabs";
import { use } from "react";
import { Tour } from "@/data/interfaces";

export default function TourPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const tourId = parseInt(use(params).id);
  const tour = tours.find((t) => t.id === tourId) as Tour;
  return (
    <div className="relative w-full">
      <div className="relative w-full h-150">
        {/* Background Image */}
        <Image
          src={tour.img}
          alt="Beautiful Jamaican Scenery"
          className="z-0 w-full h-full object-cover"
        />
      </div>
      <div>
        <TourTabs excursion={tour} />
      </div>
    </div>
  );
}
