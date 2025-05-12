"use client";

import { TiltFx } from "@/once-ui/components/TiltFx";
import Image from "next/image";
import { CERT } from "@/assets";
import { RevealFx } from "@/once-ui/components/RevealFx";
import CertificateInfoCard from "../CertificateInfoCard";

export default function CertificationSample() {
  //TODO: install once-ui and add tilt effect to certificate image like bookmark of threads
  return (
    <RevealFx speed="medium" delay={0} translateY={0}>
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 py-10 px-4">
        <TiltFx
          border="brand-alpha-weak"
          position="relative"
          maxWidth={50}
          className="rounded-lg"
        >
          <Image src={CERT} alt="Certificate" />
        </TiltFx>
        <CertificateInfoCard />
      </div>
    </RevealFx>
  );
}
