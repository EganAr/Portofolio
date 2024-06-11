import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateString = (value: unknown, maxlength: number) => {
  if (!value || typeof value !== "string" || value.length > maxlength) {
    return false;
  }

  return true;
};
