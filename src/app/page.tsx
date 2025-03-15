"use client";
import { HERO } from "@/assets";
import Hover from "@/components/Hover";
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
      <div className="bg-gray-200">
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

      {/* <Hover color="red" delay={0.2} size={40}>
        <div className="h-[100vh]"></div>
      </Hover> */}

      <div className="h-[200vh] bg-gray-50">
        <p className="text-xl text-center p-8">
          Scroll down to see the navbar transition!
        </p>
      </div>
    </div>
  );
}
