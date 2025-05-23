"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-6 pb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Your Company</h3>
            <p className="text-sm">© 2025 Your Company. All Rights Reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
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
    </footer>
  );
}
