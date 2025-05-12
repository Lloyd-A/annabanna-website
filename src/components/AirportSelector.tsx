"use client";

import Image from "next/image";
import { MBJ, KIN } from "@/assets";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { useScreenSize } from "@/hooks/useScreenSize";

export default function AirportSelector() {
  const isLargeScreen = useScreenSize() >= 1024;
  return (
    <Card className="relative w-full h-100 lg:h-screen p-0 shadow-lg rounded-md overflow-hidden">
      <CardContent className="overflow-hidden">
        {/* MBJ Section */}
        <Link
          href="/airport/1"
          className={`absolute w-full h-full top-0 left-0 hover:brightness-50 ${
            isLargeScreen ? "left-half" : "top-half"
          }`}
        >
          <Image
            src={MBJ}
            alt="MBJ Airport"
            className="w-full lg:h-full object-cover hover:scale-105 transition-transform"
          />
          <span
            className={`airport-label bg-black rounded-md p-1 ${
              isLargeScreen ? "airport-label-left" : "airport-label-left-sm"
            }`}
          >
            Donald Sangster Int&apos;l
          </span>
        </Link>

        {/* KIN Section */}
        <Link
          href="/airport/2"
          className={`absolute w-full h-full top-0 left-0  hover:brightness-50 ${
            isLargeScreen ? "right-half" : "bottom-half"
          }`}
        >
          <Image
            src={KIN}
            alt="KIN Airport"
            className="w-full min-h-[550px] lg:h-full object-cover hover:scale-105 transition-transform"
          />
          <span
            className={`airport-label bg-black rounded-md p-1 ${
              isLargeScreen ? "airport-label-right" : "airport-label-right-sm"
            }`}
          >
            Norman Manley Int&apos;l
          </span>
        </Link>
      </CardContent>
    </Card>
  );
}
