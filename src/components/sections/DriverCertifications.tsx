"use client";

import Image from "next/image";
import { JTB, TPDCO, TEAM_JA, OCHO_RIOS } from "@/assets";

export default function DriverCertifications() {
  return (
    <section className="relative py-20 text-white overflow-hidden">
      {/* Fixed background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={OCHO_RIOS}
          alt="Background"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-md animate-fade-in">
            Your Driver is Professionally Trained & Certified By
          </h2>
          <div className="flex justify-center gap-10 flex-wrap">
            {[JTB, TPDCO, TEAM_JA].map((logo, index) => (
              <div
                key={index}
                className="p-4 transition-transform duration-300 transform hover:scale-110"
              >
                <Image
                  src={logo}
                  alt={`Certification Logo ${index + 1}`}
                  className="h-32 w-auto object-contain"
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
