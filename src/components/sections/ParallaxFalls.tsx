"use client";
import { FALLS } from "@/assets";
import { useScreenSize } from "@/hooks/useScreenSize";

export default function ParallaxFalls() {
  const screenSize = useScreenSize();
  return (
    // <section
    //   className="relative py-45 bg-fixed bg-cover bg-center text-white"
    //   style={{
    //     backgroundImage: `url(${FALLS.src})`,
    //     backgroundPosition: screenSize < 768 ? "35% 170px" : "center 170px",
    //   }}
    // >
    //   <div className="absolute inset-0 bg-black opacity-30"></div>
    // </section>
    <section className="relative py-45 overflow-hidden">
      {/* Fixed background image */}
      <div className="fixed inset-0 -z-10">
        <img
          src={FALLS.src}
          alt="Falls Background"
          className="w-full h-full object-cover"
          style={{
            objectPosition: screenSize < 768 ? "35% 170px" : "center 170px",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>
    </section>
  );
}
