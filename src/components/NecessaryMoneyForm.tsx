"use client";

import { useEffect } from "react";

import type { CurrencyInputOnChangeValues } from "react-currency-input-field";

import { useNecessaryMoney } from "@/hooks/useNecessaryMoney";
import { calculateRequiredAmount } from "@/lib/necessary-money";

import { Label } from "./ui/label";
import { MoneyInput } from "./ui/money-input";

type NecessaryMoneyFormProps = {
  setResult: React.Dispatch<React.SetStateAction<number>>;
};

export default function NecessaryMoneyForm({
  setResult,
}: NecessaryMoneyFormProps) {
  const intlConfig = {
    locale: "pt-BR",
    currency: "BRL",
  };

  const [{ desiredDividend, dividendYield }, setValues] = useNecessaryMoney();

  const handleMoneyChange = (
    _: string | undefined,
    name: string | undefined,
    options?: CurrencyInputOnChangeValues | undefined,
  ) => {
    setValues({ [name as string]: Number(options?.float) });
  };

  useEffect(() => {
    setResult(
      calculateRequiredAmount({
        desiredDividend,
        dividendYield,
      }),
    );
  }, [desiredDividend, dividendYield, setResult]);

  return (
    <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
      <fieldset className="grid gap-6 rounded-lg border p-4">
        <legend className="-ml-1 px-1 text-sm font-medium">Dados</legend>
        <div className="grid gap-3">
          <Label htmlFor="dividendYield">Dividend Yield</Label>
          <MoneyInput
            defaultValue={dividendYield}
            id="dividendYield"
            name="dividendYield"
            placeholder="Adicione um valor"
            suffix="%"
            onValueChange={handleMoneyChange}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="desiredDividend">Valor desejado</Label>
          <MoneyInput
            defaultValue={desiredDividend}
            id="desiredDividend"
            intlConfig={intlConfig}
            name="desiredDividend"
            placeholder="Adicione um valor"
            onValueChange={handleMoneyChange}
          />
        </div>
      </fieldset>
    </form>
  );
}
