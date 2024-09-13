export type MonthsAndYears = {
  years: number;
  months: number;
  totalMonths?: number;
};

export type InvestmentArgs = {
  interestRate: number;
  finalValue: number;
  monthlyInvestment: number;
  initialValue?: number;
};
