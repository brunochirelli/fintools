import type { InvestmentArgs, MonthsAndYears } from "@/types";

import { getYearsAndMonths } from "./utils";

export const calculateInvestmentGoal = ({
  interestRate,
  finalValue,
  monthlyInvestment,
  initialValue = 0,
}: InvestmentArgs): MonthsAndYears => {
  if (interestRate <= 0 || finalValue <= 0 || monthlyInvestment <= 0) {
    return { years: 0, months: 0, totalMonths: 0 };
  }

  const i = interestRate / 12 / 100;

  const monthsToAchieve =
    Math.log(
      ((finalValue * i) / monthlyInvestment + 1) /
        (1 + (initialValue * i) / monthlyInvestment),
    ) / Math.log(1 + i);

  return getYearsAndMonths(monthsToAchieve);
};

export function calculateInvestmentEvolution({
  monthlyInvestment,
  finalValue,
  interestRate,
  initialValue = 0,
}: InvestmentArgs) {
  const i = interestRate / 12 / 100;
  let balance = initialValue ?? 0; // Inicialmente, o saldo é zero
  let monthsCount = 0; // Contador de meses
  const financialProgress = []; // Array para armazenar a evolução mensal

  while (balance < finalValue) {
    balance = balance * (1 + i) + monthlyInvestment; // Aplica juros compostos e adiciona o investimento mensal
    monthsCount++;
    financialProgress.push({ month: monthsCount, balance: balance.toFixed(2) }); // Armazena o saldo de cada mês
  }

  return financialProgress; // Retorna a evolução do saldo mês a mês
}
