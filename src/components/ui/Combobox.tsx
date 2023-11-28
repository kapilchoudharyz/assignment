import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "language",
    label: "language",
  },
  {
    value: "language",
    label: "language",
  },
  {
    value: "language",
    label: "language",
  },
  {
    value: "language",
    label: "language",
  },
  {
    value: "language",
    label: "language",
  },
  {
    value: "language",
    label: "language",
  },
  {
    value: "language",
    label: "language",
  },
  {
    value: "language",
    label: "language",
  },
];

export function Combobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[118.3px] px-[6px] py-[8px] justify-between bg-transparent border-0 text-white hover:bg-[rgba(255,255,255,0.07)] hover:text-white "
        >
          <img src="../../../public/language.svg" alt="language symbol" />
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "English"}
          <img
            src="../../../public/arrow_drop_down.svg"
            alt="drop down button"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 text-[24px] mr-4">
        <Command>
          {/*<CommandInput placeholder="Search framework..." />*/}
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup className={"bg-[#1D1F2B]"}>
            {frameworks.map((framework) => (
              <CommandItem
                className={"text-[16px] text-white bg-[#1D1F2B]"}
                key={Math.random() * 10000}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
