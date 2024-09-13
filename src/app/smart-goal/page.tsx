import { Suspense } from "react";

import FinancialGoal from "@/components/FinancialGoal";

export default function SmartGoalPage() {
  return (
    <Suspense>
      <FinancialGoal />
    </Suspense>
  );
}
