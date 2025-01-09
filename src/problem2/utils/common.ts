import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const wait = (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
