import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { MonthsAndYears } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const getYearsAndMonths = (months: number): MonthsAndYears => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return {
    years,
    months: Math.ceil(remainingMonths),
    totalMonths: Math.ceil(months),
  };
};
