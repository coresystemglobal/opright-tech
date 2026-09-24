import { type ClassValue, clsx } from "clsx";

// Lightweight cn utility without tailwind-merge dependency
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
