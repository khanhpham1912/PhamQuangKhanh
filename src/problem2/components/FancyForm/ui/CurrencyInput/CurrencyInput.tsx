// components
import {
  Input,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  type InputProps,
} from "@headlessui/react";

// utils
import { capitalizeFirstLetter, cn, displayValue } from "@/utils/common";
import { tokenPriceData } from "@/utils/constant";

// icons
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/16/solid";

// hooks
import { useState } from "react";
import { BlurToken } from "@/public";
import { DynamicComponent, For } from "@/components/common";

export const CurrencyInput = ({ className, ...props }: InputProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState(tokenPriceData[0]);

  return (
    <div
      className={cn(
        className,
        "shadow-[inset_0_0_0_1px] shadow-neutral-300 rounded-lg transition-all duration-300 hover:shadow-neutral-500 focus-within:!shadow-neutral-800 focus-within:!shadow-[inset_0_0_0_2px] flex"
      )}
    >
      <Input
        placeholder="0"
        className="py-2.5 px-3 border-none rounded-lg shadow-none bg-inherit data-[focus]:outline-none flex-1"
        {...props}
      />
      <Listbox value={selectedCurrency} onChange={setSelectedCurrency}>
        <ListboxButton className="relative flex items-center justify-between text-sm min-w-48 text-black pr-2.5 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25">
          <span>{displayValue(selectedCurrency.currency)}</span>
          <ChevronDownIcon
            className="group pointer-events-none size-4"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className="w-[var(--button-width)] rounded-xl border bg-white p-1 [--anchor-gap:4px] focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 [--anchor-max-height:192px]"
        >
          <For each={tokenPriceData}>
            {(token, index) => (
              <ListboxOption
                key={`${token?.currency} ${index}`}
                value={token}
                className="group flex justify-between cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-neutral-100"
              >
                <div className="flex gap-3">
                  <DynamicComponent
                    source="/icons"
                    name={token.currency}
                    getNameCallback={(name: string) => {
                      return `${capitalizeFirstLetter(name)}Icon`;
                    }}
                  />
                  <BlurToken />
                  <span className="text-sm/6 text-black">
                    {displayValue(token.currency)}
                  </span>
                </div>
                <CheckIcon className="invisible size-4 fill-green-600 group-data-[selected]:visible" />
              </ListboxOption>
            )}
          </For>
        </ListboxOptions>
      </Listbox>
    </div>
  );
};
