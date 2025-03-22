"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { JAM } from "@/assets";
import { tours } from "@/data/constants";
import TourTabs from "@/components/TourTabs";

export default function TourPage({ params }: { params: { id: string } }) {
  // const { id } = params;
  const tour = { id: 1, name: "Dunn's River Falls", img: JAM };
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
        <TourTabs tourId={tour.id} />
      </div>
    </div>
  );
}
