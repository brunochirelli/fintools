"use client";

import { useEffect } from "react";

import { parseAsFloat, parseAsInteger, useQueryState } from "nuqs";
import type { CurrencyInputOnChangeValues } from "react-currency-input-field";

import { calculateFinancialGoal } from "@/lib/financial-goal";
import type { MonthsAndYears } from "@/types";

import { Label } from "./ui/label";
import { MoneyInput } from "./ui/money-input";

type GoalFormProps = {
  setResult: React.Dispatch<React.SetStateAction<MonthsAndYears>>;
};

export default function GoalForm({ setResult }: GoalFormProps) {
  const intlConfig = {
    locale: "pt-BR",
    currency: "BRL",
  };

  const [interestRate, setInterestRate] = useQueryState(
    "i",
    parseAsFloat.withDefault(11.25),
  );
  const [finalValue, setFinalValue] = useQueryState(
    "vf",
    parseAsInteger.withDefault(500000),
  );
  const [monthlyInvestment, setMonthlyInvestment] = useQueryState(
    "mi",
    parseAsInteger.withDefault(1000),
  );

  const handleMoneyChange = (
    value: string | undefined,
    name?: string | undefined,
    options?: CurrencyInputOnChangeValues | undefined,
  ) => {
    console.log(value, name, options);
    switch (name) {
      case "interestRate":
        setInterestRate(!!value ? Number(options?.float) : 0);
        break;
      case "final-value":
        setFinalValue(!!value ? Number(value) : 0);
        break;
      case "monthlyInvestment":
        setMonthlyInvestment(!!value ? Number(value) : 0);
      default:
        break;
    }
  };

  useEffect(() => {
    setResult(
      calculateFinancialGoal({
        interestRate,
        finalValue,
        monthlyInvestment,
      }),
    );
  }, [interestRate, finalValue, monthlyInvestment, setResult]);

  return (
    <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
      <fieldset className="grid gap-6 rounded-lg border p-4">
        <legend className="-ml-1 px-1 text-sm font-medium">Dados</legend>
        <div className="grid gap-3">
          <Label htmlFor="interestRate">Taxa de juros</Label>
          <MoneyInput
            decimalsLimit={2}
            defaultValue={11.25}
            id="interestRate"
            name="interestRate"
            placeholder="Adicione um valor"
            suffix="%"
            onValueChange={handleMoneyChange}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="finalValue">Valor desejado</Label>
          <MoneyInput
            decimalsLimit={2}
            defaultValue={1000000}
            id="final-value"
            intlConfig={intlConfig}
            name="final-value"
            placeholder="Adicione um valor"
            onValueChange={handleMoneyChange}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="monthlyInvestment">Investimento mensal</Label>
          <MoneyInput
            decimalsLimit={2}
            id="monthlyInvestment"
            intlConfig={intlConfig}
            name="monthlyInvestment"
            placeholder="Adicione um valor"
            onValueChange={handleMoneyChange}
          />
        </div>
      </fieldset>
    </form>
  );
}
