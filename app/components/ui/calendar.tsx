"use client";

import * as React from "react";
import { DayPicker, type DropdownProps } from "react-day-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ScrollArea } from "~/components/ui/scroll-area";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import TriangleIcon from "../icons/triangle-icon";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  captionLayout = "dropdown-buttons",
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      captionLayout={captionLayout}
      showOutsideDays={showOutsideDays}
      fromYear={1960}
      toYear={2030}
      className={cn("", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "",
        caption:
          "flex justify-center p-4 relative items-center border-b border-neutral-200",
        caption_label: "text-subtle-semibold text-common-black",
        caption_dropdowns: "flex items-center gap-2 [&>.rdp-vhidden]:hidden",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "bg-transparent p-0 hover:opacity-100 size-7 has-[>svg]:p-0 [&_svg]:size-4 [&_svg]:disabled:fill-neutral-400"
        ),
        nav_button_previous: "absolute left-4",
        nav_button_next: "absolute right-4",
        table: "w-max m-3 border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "flex items-center justify-center text-muted-foreground w-9 h-6 p-0 font-normal text-body13",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-sm"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 min-w-[auto] w-9 p-0 font-normal text-body13"
        ),
        day_range_start:
          "day-range-start bg-primary [&:is(.day-outside)]:text-background [&:is(.day-today)]:bg-primary [&:is(.day-today)]:text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_range_end:
          "day-range-end bg-primary [&:is(.day-outside)]:text-background hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today:
          "day-today bg-accent text-accent-foreground [&:is(.day-today)]:bg-background [&:is(.day-today)]:text-primary border border-primary",
        day_outside: "day-outside [&:is(.day-outside)]:text-neutral-400",
        day_disabled: "text-neutral-400",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground aria-selected:rounded-none [&:is(.day-today)]:rounded-sm",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Dropdown: ({ value, onChange, children }: DropdownProps) => {
          const options = React.Children.toArray(
            children
          ) as React.ReactElement<React.HTMLProps<HTMLOptionElement>>[];
          const selected = options.find((child) => child.props.value === value);
          const handleChange = (value: string) => {
            const changeEvent = {
              target: { value },
            } as React.ChangeEvent<HTMLSelectElement>;
            onChange?.(changeEvent);
          };
          return (
            <Select
              value={value?.toString()}
              onValueChange={(value) => {
                handleChange(value);
              }}
            >
              <SelectTrigger className="h-7 px-0 min-w-[90px] justify-center gap-1 text-subtle-semibold border-0 [&:first-of-type]:min-w-[74px] hover:bg-neutral-100 data-[state='open']:border data-[state='open']:border-primary">
                <SelectValue>{selected?.props?.children}</SelectValue>
              </SelectTrigger>
              <SelectContent position="popper" className="mt-3">
                <ScrollArea className="h-80">
                  {options.map((option, id: number) => (
                    <SelectItem
                      key={`${option.props.value}-${id}`}
                      value={option.props.value?.toString() ?? ""}
                    >
                      {option.props.children}
                    </SelectItem>
                  ))}
                </ScrollArea>
              </SelectContent>
            </Select>
          );
        },
        IconLeft: () => <TriangleIcon className="rotate-90 fill-neutral-700" />,
        IconRight: () => (
          <TriangleIcon className="-rotate-90 fill-neutral-700" />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
