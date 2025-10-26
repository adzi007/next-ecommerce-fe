// components/ui/SelectPopover.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { ChevronsUpDown } from "lucide-react";

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectPopoverProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
}

export default function SelectPopover({
  label,
  options,
  value,
  placeholder = "Select option...",
  error,
  onChange,
}: SelectPopoverProps) {
  const [open, setOpen] = useState(false);

  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className={`w-full h-11 justify-between ${
              error ? "border-red-500" : ""
            }`}
          >
            {selectedLabel || placeholder}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder={`Search ${label || "option"}...`} className="h-9" />
            <CommandList>
              <CommandEmpty>No result found.</CommandEmpty>
              <CommandGroup>
                {options.map((opt) => (
                  <CommandItem
                    key={opt.value}
                    onSelect={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                  >
                    {opt.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
