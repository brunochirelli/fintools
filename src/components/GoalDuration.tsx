import { useInvestmentGoal } from "@/hooks/useInvestmentGoal";
import type { MonthsAndYears } from "@/types";

import { InvestmentChart } from "./InvestmentChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type GoalResultProps = {
  result: MonthsAndYears;
};

export default function GoalDuration({ result }: GoalResultProps) {
  const [{ finalValue, interestRate, monthlyInvestment, initialValue }] =
    useInvestmentGoal();

  const formattedYearsAndMonths = () => {
    const formattedYears = result.years > 0 ? `${result.years} anos` : "";
    const formattedMonths = result.months > 0 ? `${result.months} meses` : "";

    if (result.years > 0 && result.months > 0) {
      return `${formattedYears} e ${formattedMonths}`;
    }

    return formattedYears || formattedMonths;
  };

  const hasAllValues =
    finalValue > 0 && interestRate > 0 && monthlyInvestment > 0;

  return (
    <Card className="relative max-w-md">
      <CardHeader className="space-y-0 pb-0">
        <CardDescription>Tempo para atingir a meta</CardDescription>
        <CardTitle className="flex flex-col items-baseline gap-1 text-4xl tabular-nums">
          <p>{formattedYearsAndMonths()}</p>
          <p className="text-sm font-normal text-muted-foreground">
            Ou {result.totalMonths} meses
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {hasAllValues && (
          <InvestmentChart
            finalValue={finalValue}
            initialValue={initialValue}
            interestRate={interestRate}
            monthlyInvestment={monthlyInvestment}
          />
        )}
      </CardContent>
    </Card>
  );
}
