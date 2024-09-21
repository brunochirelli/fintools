"use client";

import { Clipboard } from "lucide-react";

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { formatCurrency } from "@/lib/utils";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type NecessaryMoneyResultProps = {
  result: number;
};

export default function NecessaryMoneyResult({
  result,
}: NecessaryMoneyResultProps) {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = () => {
    return copy(parseInt(`${result}`).toString())
      .then(() => {
        console.log("Copied!", { result });
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  // if (!result) return null;

  return (
    <Card className="relative max-w-md">
      <CardHeader className="space-y-2 pb-4">
        <CardDescription>Total necessário</CardDescription>
        <CardTitle className="flex flex-col items-baseline gap-1 text-4xl tabular-nums">
          <p>{formatCurrency(result)}</p>{" "}
          <button onClick={handleCopy}>
            <Clipboard />
          </button>
          <p>Copied value: {copiedText ?? "Nothing is copied yet!"}</p>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
