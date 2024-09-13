import * as React from "react";

import type { CurrencyInputProps } from "react-currency-input-field";
import CurrencyInput from "react-currency-input-field";

import { cn } from "@/lib/utils";

type MoneyInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  CurrencyInputProps;

const MoneyInput = React.forwardRef<HTMLInputElement, MoneyInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <CurrencyInput
        ref={ref}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        decimalsLimit={2}
        {...props}
      />
    );
  },
);
MoneyInput.displayName = "MoneyInput";

export { MoneyInput };
