export function calculateRequiredAmount({
  desiredDividend,
  dividendYield,
}: {
  desiredDividend: number;
  dividendYield: number;
}) {
  // Converte a dividend yield de percentual para decimal
  const yieldRate = dividendYield / 100 / 12;

  // Calcula o montante necessário
  const requiredAmount = desiredDividend / yieldRate;

  return requiredAmount;
}
