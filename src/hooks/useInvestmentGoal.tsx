import { parseAsFloat, parseAsInteger, useQueryStates } from "nuqs";

export function useInvestmentGoal() {
  return useQueryStates({
    interestRate: parseAsFloat.withDefault(11.25),
    finalValue: parseAsInteger.withDefault(1000000),
    monthlyInvestment: parseAsInteger.withDefault(2000),
    initialValue: parseAsInteger.withDefault(0),
  });
}
