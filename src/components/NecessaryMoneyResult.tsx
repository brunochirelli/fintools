import { formatCurrency } from "@/lib/utils";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type NecessaryMoneyResultProps = {
  result: number;
};

export default function NecessaryMoneyResult({
  result,
}: NecessaryMoneyResultProps) {
  if (!result) return null;
  return (
    <Card className="relative max-w-md">
      <CardHeader className="space-y-2 pb-4">
        <CardDescription>Total necessário</CardDescription>
        <CardTitle className="flex flex-col items-baseline gap-1 text-4xl tabular-nums">
          <p>{formatCurrency(result)}</p>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
