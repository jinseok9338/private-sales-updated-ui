"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";
import { NumericFormat, type NumericFormatProps } from "react-number-format";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export interface NumberInputProps
  extends Omit<NumericFormatProps, "value" | "onValueChange"> {
  stepper?: number;
  thousandSeparator?: string;
  placeholder?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  value?: number; // Controlled value
  suffix?: string;
  prefix?: string;
  onValueChange?: (value: number | undefined) => void;
  fixedDecimalScale?: boolean;
  decimalScale?: number;
}

export const InputNumber = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      stepper,
      thousandSeparator,
      placeholder,
      defaultValue,
      min = -Infinity,
      max = Infinity,
      onValueChange,
      fixedDecimalScale = false,
      decimalScale = 0,
      suffix,
      prefix,
      value: controlledValue,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState<number | undefined>(
      controlledValue ?? defaultValue
    );

    const handleIncrement = useCallback(() => {
      setValue((prev) =>
        prev === undefined ? stepper ?? 1 : Math.min(prev + (stepper ?? 1), max)
      );
    }, [stepper, max]);

    const handleDecrement = useCallback(() => {
      setValue((prev) =>
        prev === undefined
          ? -(stepper ?? 1)
          : Math.max(prev - (stepper ?? 1), min)
      );
    }, [stepper, min]);

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (
          document.activeElement ===
          (ref as React.RefObject<HTMLInputElement>).current
        ) {
          if (e.key === "ArrowUp") {
            handleIncrement();
          } else if (e.key === "ArrowDown") {
            handleDecrement();
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [handleIncrement, handleDecrement, ref]);

    useEffect(() => {
      if (controlledValue !== undefined) {
        setValue(controlledValue);
      }
    }, [controlledValue]);

    const handleChange = (values: {
      value: string;
      floatValue: number | undefined;
    }) => {
      const newValue =
        values.floatValue === undefined ? undefined : values.floatValue;
      setValue(newValue);
      if (onValueChange) {
        onValueChange(newValue);
      }
    };

    const handleBlur = () => {
      if (value !== undefined) {
        if (value < min) {
          setValue(min);
          (ref as React.RefObject<HTMLInputElement>).current!.value =
            String(min);
        } else if (value > max) {
          setValue(max);
          (ref as React.RefObject<HTMLInputElement>).current!.value =
            String(max);
        }
      }
    };

    return (
      <div className="w-[160px] flex items-center relative [&:focus-within_[data-button]]:flex [&:focus-within_[type='text']]:pr-9">
        <NumericFormat
          value={value}
          onValueChange={handleChange}
          thousandSeparator={thousandSeparator}
          decimalScale={decimalScale}
          fixedDecimalScale={fixedDecimalScale}
          allowNegative={min < 0}
          valueIsNumericString
          onBlur={handleBlur}
          max={max}
          min={min}
          suffix={suffix}
          prefix={prefix}
          customInput={Input}
          placeholder={placeholder}
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none relative h-9 text-right px-3 disabled:text-neutral-400"
          getInputRef={ref}
          {...props}
        />

        <div
          data-button
          className="hidden flex-col absolute right-3 top-1/2 -translate-y-1/2"
        >
          <Button
            aria-label="Increase value"
            className="min-w-[auto] w-4 h-2 p-0 rounded-none focus-visible:relative before:content-[''] before:border-l-4 before:border-r-4 before:border-b-[5px] before:border-primary before:border-l-transparent before:border-r-transparent"
            variant="ghost"
            onClick={handleIncrement}
            disabled={value === max}
          ></Button>
          <Button
            aria-label="Decrease value"
            className="min-w-[auto] h-2 w-4 p-0 rounded-none focus-visible:relative before:content-[''] before:border-l-4 before:border-r-4 before:border-t-[5px] before:border-primary before:border-l-transparent before:border-r-transparent"
            variant="ghost"
            onClick={handleDecrement}
            disabled={value === min}
          ></Button>
        </div>
      </div>
    );
  }
);
