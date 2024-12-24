"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "~/components/ui/button";

export interface Filter {
  id: string;
  name: string;
  options?: string[];
  hasDropdown: boolean;
}

interface FilterChipsProps {
  filters: Filter[];
}

export function FilterChips({ filters }: FilterChipsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto py-4 px-4">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          className="flex items-center gap-1 px-4 py-2 rounded-full border text-sm whitespace-nowrap hover:bg-gray-50 bg-transparent shadow-none text-black"
        >
          {filter.name}
          {filter.hasDropdown && <ChevronDown className="h-4 w-4" />}
        </Button>
      ))}
    </div>
  );
}
