"use client";

import { useState } from "react";

import type { MonthsAndYears } from "@/types";

import GoalDuration from "./GoalDuration";
import GoalForm from "./GoalForm";

export default function FinancialGoal() {
  const [result, setResult] = useState<MonthsAndYears>({ months: 0, years: 0 });

  return (
    <div className="grid h-full gap-6 md:grid-cols-[minmax(auto,400px)_1fr]">
      <div className="">
        <GoalForm setResult={setResult} />
      </div>
      <div className="">
        <GoalDuration result={result} />
      </div>
    </div>
  );
}
