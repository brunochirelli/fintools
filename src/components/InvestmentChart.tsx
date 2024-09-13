"use client";

import * as React from "react";

import { Area, AreaChart, XAxis, YAxis } from "recharts";

import { calculateInvestmentEvolution } from "@/lib/financial-goal";
import { formatCurrency } from "@/lib/utils";
import type { InvestmentArgs } from "@/types";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

export const description = "An interactive area chart";

type InvestmentChartProps = InvestmentArgs;

export function InvestmentChart({
  finalValue,
  interestRate,
  monthlyInvestment,
  initialValue,
}: InvestmentChartProps) {
  const chartData = React.useMemo(() => {
    return calculateInvestmentEvolution({
      finalValue,
      interestRate,
      monthlyInvestment,
      initialValue,
    }).map((item) => ({
      month: item.month,
      balance: +item.balance,
    }));
  }, [finalValue, initialValue, interestRate, monthlyInvestment]);

  return (
    <ChartContainer
      config={{
        month: {
          label: "Mês",
          color: "hsl(var(--chart-2))",
        },
      }}
    >
      <AreaChart
        data={chartData}
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        accessibilityLayer
      >
        <XAxis dataKey="month" hide />
        <YAxis hide />
        <defs>
          <linearGradient id="fillTime" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="var(--color-time)" stopOpacity={0.8} />
            <stop
              offset="95%"
              stopColor="var(--color-time)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="balance"
          fill="url(#fillTime)"
          fillOpacity={0.4}
          stroke="var(--color-time)"
          type="natural"
        />
        <ChartTooltip
          content={<ChartTooltipContent hideLabel />}
          cursor={false}
          formatter={(value) => (
            <div className="flex min-w-[120px] flex-col text-xs text-muted-foreground">
              <p>Acumulado</p>
              <p>{formatCurrency(+value)}</p>
            </div>
          )}
        />
      </AreaChart>
    </ChartContainer>
  );
}
