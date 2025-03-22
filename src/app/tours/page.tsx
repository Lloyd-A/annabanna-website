"use client";
import Link from "next/link";
import { tours } from "@/data/constants";

export default function ToursPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Available Tours</h1>
      <ul className="space-y-2">
        {tours.map((tour) => (
          <li key={tour.id}>
            <Link
              href={`/tours/${tour.id}`}
              className="text-blue-600 hover:underline"
            >
              {tour.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
