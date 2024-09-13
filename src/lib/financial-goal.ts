import type { MonthsAndYears } from "@/types";

import { getYearsAndMonths } from "./utils";

export const calculateFinancialGoal = ({
  interestRate,
  finalValue,
  monthlyInvestment,
}: {
  interestRate: number;
  finalValue: number;
  monthlyInvestment: number;
}): MonthsAndYears => {
  if (interestRate <= 0 || finalValue <= 0 || monthlyInvestment <= 0) {
    return { years: 0, months: 0, totalMonths: 0 };
  }

  const i = interestRate / 12 / 100;

  const monthsToAchieve =
    Math.log((finalValue * i) / monthlyInvestment + 1) / Math.log(1 + i);

  return getYearsAndMonths(monthsToAchieve);
};
