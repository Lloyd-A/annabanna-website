"use client";
import { HERO } from "@/assets";
import CertificationSample from "@/components/sections/CertificateSample";
import DriverCertifications from "@/components/sections/DriverCertifications";
import PopularTours from "@/components/sections/PopularTours";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <Image src={HERO} alt="Beautiful Jamaican Scenery" className="z-0" />
      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white opacity-90 text-5xl animate-fade-in font-bold drop-shadow-sm">
          Explore Jamaica with AnnaBanna Tours
        </h1>
      </div>
      <PopularTours />
      <DriverCertifications />
      <CertificationSample />
      <div className="h-[200vh] bg-gray-50">
        <p className="text-xl text-center p-8">
          Scroll down to see the navbar transition!
        </p>
      </div>
    </div>
  );
}
