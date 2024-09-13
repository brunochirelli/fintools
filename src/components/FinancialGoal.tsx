"use client";

import { useState } from "react";

import GoalDuration from "./GoalDuration";
import GoalForm from "./GoalForm";

export default function FinancialGoal() {
  const [result, setResult] = useState(0);

  return (
    <div className="flex max-w-lg flex-col gap-6">
      <GoalDuration result={result} />
      <GoalForm setResult={setResult} />
    </div>
  );
}
