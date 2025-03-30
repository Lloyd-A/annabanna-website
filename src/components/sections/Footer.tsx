"use client";

import { FALLS } from "@/assets";
import Link from "next/link";

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
            <Link href="/" className="text-md hover:text-yellow-400">
              About
            </Link>
            <Link href="/" className="text-md hover:text-yellow-400">
              Contact
            </Link>
            <Link href="/" className="text-md hover:text-yellow-400">
              Privacy Policy
            </Link>
            <Link href="/" className="text-md hover:text-yellow-400">
              Terms of Service
            </Link>
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
