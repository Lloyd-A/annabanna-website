"use client";
import { HERO } from "@/assets";
import Hover from "@/components/Hover";
import CertificationSample from "@/components/sections/CertificateSample";
import DriverCertifications from "@/components/sections/DriverCertifications";
import PopularTours from "@/components/sections/PopularTours";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="relative h-[100dvh] w-full overflow-hidden">
        <Image
          src={HERO}
          alt="Beautiful Jamaican Scenery"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 text-center">
          <h1 className="text-white opacity-90 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold animate-fade-in drop-shadow-sm">
            Explore Jamaica with AnnaBanna Tours
          </h1>
        </div>
      </div>
      <div className="relative bg-gray-200">
        <Hover color="#fde047" delay={0.2} size={10}>
          <PopularTours />
        </Hover>
      </div>
      <DriverCertifications />
      <div className="bg-gray-200">
        <Hover color="#fde047" delay={0.2} size={10}>
          <CertificationSample />
        </Hover>
      </div>
    </div>
  );
}
