"use client";

import * as React from "react";
import dayjs from "dayjs";

import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import CalendarIcon from "~/components/icons/calendarIcon";

/**
 * CalendarInput 컴포넌트는 날짜 선택을 위한 컴포넌트입니다.
 * Input 컴포넌트와 유사한 방식으로 사용할 수 있으며, ref를 전달할 수 있습니다.
 * 커스텀 날짜 포맷을 지정할 수 있습니다.
 */
export interface CalendarInputProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "value" | "onChange"
  > {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  /**
   * 날짜 표시 포맷을 지정합니다. dayjs 포맷 문자열을 사용합니다.
   * 기본값: "MMMM D, YYYY" (예: January 1, 2023)
   */
  dateFormat?: string;
}

const CalendarInput = React.forwardRef<HTMLButtonElement, CalendarInputProps>(
  (
    {
      value,
      onChange,
      placeholder = "Pick a date",
      dateFormat = "MMMM D, YYYY",
      className,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant={"outline"}
            className={cn(
              "w-[170px] h-9 text-left font-normal justify-between has-[>svg]:px-3 has-[>svg]:pr-2 has-[>svg]:py-0",
              !value && "text-neutral-500",
              disabled && "disabled:bg-disabled disabled:text-neutral-400",
              className
            )}
            disabled={disabled}
            {...props}
          >
            {value ? (
              dayjs(value).format(dateFormat)
            ) : (
              <span>{placeholder}</span>
            )}
            <CalendarIcon className="size-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    );
  }
);

CalendarInput.displayName = "CalendarInput";

export { CalendarInput };
