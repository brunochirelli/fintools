import { Suspense } from "react";

import NecessaryMoney from "@/components/NecessaryMoney";

export default function NecessaryMoneyPage() {
  return (
    <Suspense>
      <NecessaryMoney />
    </Suspense>
  );
}
