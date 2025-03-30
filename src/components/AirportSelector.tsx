"use client";

import Image from "next/image";
import { MBJ, KIN } from "@/assets";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function AirportSelector() {
  return (
    <Card className="relative w-full h-screen p-0 shadow-lg rounded-md overflow-hidden">
      <CardContent className="overflow-hidden">
        {/* MBJ Section */}
        <Link
          href="/airport/1"
          className="absolute w-full h-full top-0 left-0 left-half hover:brightness-50"
        >
          <Image
            src={MBJ}
            alt="MBJ Airport"
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
          <span className="airport-label airport-label-left bg-black rounded-md p-1">
            Donald Sangster Int'l
          </span>
        </Link>

        {/* KIN Section */}
        <Link
          href="/airport/2"
          className="absolute w-full h-full top-0 left-0 right-half hover:brightness-50"
        >
          <Image
            src={KIN}
            alt="KIN Airport"
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
          <span className="airport-label airport-label-right bg-black rounded-md p-1">
            Norman Manley Int'l
          </span>
        </Link>
      </CardContent>
    </Card>
  );
}
