import { DollarSign } from "lucide-react";

import type { MonthsAndYears } from "@/types";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type GoalResultProps = {
  result: MonthsAndYears;
};

export default function GoalDuration({ result }: GoalResultProps) {
  const formattedYearsAndMonths = () => {
    const formattedYears = result.years > 0 ? `${result.years} anos` : "";
    const formattedMonths = result.months > 0 ? `${result.months} meses` : "";

    if (result.years > 0 && result.months > 0) {
      return `${formattedYears} e ${formattedMonths}`;
    }

    return formattedYears || formattedMonths;
  };

  return (
    <Card x-chunk="A card showing the total revenue in USD and the percentage difference from last month.">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Tempo para atingir a meta
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">{formattedYearsAndMonths()}</div>
        <p className="text-xs text-muted-foreground">
          Ou {result?.totalMonths} meses
        </p>
      </CardContent>
    </Card>
  );
}
