"use client";

import { Card } from "@/components/ui/card";
import { PiPersonSimpleSwimBold, PiPersonSimpleHikeBold } from "react-icons/pi";
import { ImLocation } from "react-icons/im";
import { Tour } from "@/data/interfaces";
import Image from "next/image";
import { Button } from "./ui/button";
import { Info } from "lucide-react";
import Link from "next/link";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <Card className="w-[300px] p-0 shadow-lg rounded-md overflow-hidden">
      <Image
        src={tour.img}
        alt={tour.name}
        className="w-full object-cover rounded-md"
      />
      <div className="p-2 flex flex-col gap-2">
        <p className="text-lg font-bold">{tour.name}</p>
        <div className="flex flex-row gap-2">
          <PiPersonSimpleSwimBold />
          <PiPersonSimpleHikeBold />
        </div>
        <div className="flex flex-row gap-2">
          <ImLocation />
          <p>St. Ann</p>
        </div>
        <p className="truncate">{tour.overview}</p>
        {/* <Link href={"tours/" + tour.id}></Link> */}
        <Button
          asChild
          className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-600 cursor-pointer"
        >
          <Link href={"tours/" + tour.id}>
            <Info className="w-5 h-5" />
            More Info
          </Link>
        </Button>
      </div>
    </Card>
  );
}
