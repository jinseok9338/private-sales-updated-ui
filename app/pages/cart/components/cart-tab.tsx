import React from "react";
import {
  Tabs as ShadcnTabs,
  TabsList as ShadcnTabsList,
  TabsTrigger as ShadcnTabsTrigger,
} from "~/components/ui/tabs";
import { TypoSubtleSemibold } from "~/components/ui/typo/AnchorsSubtle";
import { cn } from "~/lib/utils";

const Tabs = ShadcnTabs;

const TabsList: React.FC<React.ComponentProps<typeof ShadcnTabsList>> = ({
  className,
  ...props
}) => (
  <ShadcnTabsList
    className={cn(
      "h-auto p-0 bg-transparent border-b border-gray-200",
      className
    )}
    {...props}
  />
);

const TabsTrigger: React.FC<React.ComponentProps<typeof ShadcnTabsTrigger>> = ({
  className,
  ...props
}) => (
  <ShadcnTabsTrigger
    className={cn(
      "px-6 py-3 h-auto rounded-none text-base font-medium transition-none relative data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=inactive]:text-gray-500",
      "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-black after:opacity-0 data-[state=active]:after:opacity-100",
      className
    )}
    {...props}
  />
);

export { Tabs, TabsList, TabsTrigger };
