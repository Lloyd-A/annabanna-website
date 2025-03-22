import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { costConfig } from "@/data/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function costCalculator(
  numPeople: number,
  hotel: string,
  tourDestination: string,
  pickupTime: string // Expected format: "hh:mm AM/PM"
): string {
  const { personMultiplier, pickupTimeMultiplier, basePrices } = costConfig;

  // Get the base price for the hotel-destination pair
  const hotelPrices = basePrices[hotel];
  if (!hotelPrices) {
    throw new Error(`Unknown hotel: ${hotel}`);
  }
  const basePrice = hotelPrices[tourDestination];
  if (!basePrice) {
    throw new Error(`Unknown tour: ${tourDestination} for hotel: ${hotel}`);
  }

  // Calculate the additional person cost (only for every even number after 4)
  const extraGroups = Math.max(0, Math.floor((numPeople - 4) / 2)); // Adjusted logic
  const extraPersonMultiplier = extraGroups * personMultiplier;
  const personCost = basePrice * (1 + extraPersonMultiplier);

  // Check if pickup time is after 8 PM or before 12:30 AM
  const [time, period] = pickupTime.split(" ");
  const [hours, minutes] = time.split(":").map(Number);

  let hour24 = hours % 12;
  if (period === "PM") hour24 += 12;

  const isLatePickup =
    hour24 >= 20 || hour24 === 0 || (hour24 === 12 && period === "AM");
  const latePickupMultiplier = isLatePickup ? pickupTimeMultiplier : 1;

  // Calculate the final cost and format as currency
  const totalCost = personCost * latePickupMultiplier;
  return `${totalCost.toFixed(2)}`;
}
