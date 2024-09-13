"use client";

import { useEffect } from "react";

import type { CurrencyInputOnChangeValues } from "react-currency-input-field";

import { useInvestmentGoal } from "@/hooks/useInvestmentGoal";
import { calculateInvestmentGoal } from "@/lib/financial-goal";
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

  const [
    { finalValue, interestRate, monthlyInvestment, initialValue },
    setValues,
  ] = useInvestmentGoal();

  const handleMoneyChange = (
    _: string | undefined,
    name: string | undefined,
    options?: CurrencyInputOnChangeValues | undefined,
  ) => {
    setValues({ [name as string]: Number(options?.float) });
  };

  useEffect(() => {
    setResult(
      calculateInvestmentGoal({
        interestRate,
        finalValue,
        monthlyInvestment,
        initialValue,
      }),
    );
  }, [interestRate, finalValue, monthlyInvestment, setResult, initialValue]);

  return (
    <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
      <fieldset className="grid gap-6 rounded-lg border p-4">
        <legend className="-ml-1 px-1 text-sm font-medium">Dados</legend>
        <div className="grid gap-3">
          <Label htmlFor="interestRate">Taxa de juros</Label>
          <MoneyInput
            defaultValue={interestRate}
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
            defaultValue={finalValue}
            id="finalValue"
            intlConfig={intlConfig}
            name="finalValue"
            placeholder="Adicione um valor"
            onValueChange={handleMoneyChange}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="monthlyInvestment">Investimento mensal</Label>
          <MoneyInput
            defaultValue={monthlyInvestment}
            id="monthlyInvestment"
            intlConfig={intlConfig}
            name="monthlyInvestment"
            placeholder="Adicione um valor"
            onValueChange={handleMoneyChange}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="initialValue">Valor inicial</Label>
          <MoneyInput
            defaultValue={initialValue}
            id="initialValue"
            intlConfig={intlConfig}
            name="initialValue"
            placeholder="Adicione um valor"
            onValueChange={handleMoneyChange}
          />
        </div>
      </fieldset>
    </form>
  );
}
