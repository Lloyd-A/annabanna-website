"use client";

import { useState } from "react";
import { FALLS } from "@/assets";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-6 pb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Your Company</h3>
            <p className="text-sm">© 2025 Your Company. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-8">
            <a href="/about" className="text-md hover:text-yellow-400">
              About
            </a>
            <a href="/contact" className="text-md hover:text-yellow-400">
              Contact
            </a>
            <a href="/privacy-policy" className="text-md hover:text-yellow-400">
              Privacy Policy
            </a>
            <a href="/terms" className="text-md hover:text-yellow-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      <section
        className="relative py-45 bg-fixed bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${FALLS.src})`,
          backgroundPosition: "center 170px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>
    </footer>
  );
}
