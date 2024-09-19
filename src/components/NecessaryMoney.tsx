"use client";

import { useState } from "react";

import NecessaryMoneyForm from "./NecessaryMoneyForm";

export default function NecessaryMoney() {
  const [result, setResult] = useState(0);

  return (
    <div className="grid h-full gap-6 md:grid-cols-[minmax(auto,400px)_1fr]">
      <div className="">
        <NecessaryMoneyForm setResult={setResult} />
      </div>
      <div className="">{/* result */}</div>
    </div>
  );
}
