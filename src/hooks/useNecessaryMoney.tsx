import { parseAsFloat, parseAsInteger, useQueryStates } from "nuqs";

export function useNecessaryMoney() {
  return useQueryStates({
    dividendYield: parseAsFloat.withDefault(8.25),
    desiredDividend: parseAsInteger.withDefault(10000),
  });
}
