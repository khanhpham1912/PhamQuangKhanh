"use client";
import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Select,
} from "@headlessui/react";
import { getExchangeResult } from "./action";
import { CurrencyInput, SubmitButton } from "./ui";
import { useState } from "react";
import clsx from "clsx";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

export const FancyForm = () => {
  const handleSubmitExchangeCurrency = async (formData: FormData) => {
    console.log("formData:", formData);
    const amount = formData.get("amount");
    console.log("amount:", typeof amount);
    // const data = await getExchangeResult(amount || 0);
  };
  return (
    <form action={handleSubmitExchangeCurrency}>
      <div className="flex flex-col gap-3 justify-center items-center rounded-lg shadow-lg border p-6">
        <Fieldset className="space-y-4 w-full">
          <Legend className="text-lg font-bold">TODO: Convert rate</Legend>

          <Field className="flex flex-col gap-1.5">
            <Label className="text-xs font-semibold">You have</Label>
            <CurrencyInput name="amount" />
            {/* <div className="shadow-[inset_0_0_0_1px] shadow-neutral-300 rounded-lg transition-all duration-300 hover:shadow-neutral-500 focus-within:!shadow-neutral-800 focus-within:!shadow-[inset_0_0_0_2px] flex">
              <Input
                placeholder="0"
                name="amount"
                className="py-2.5 px-3 border-none rounded-lg shadow-none bg-inherit data-[focus]:outline-none flex-1"
              />
              <Listbox value={selected} onChange={setSelected} name="currency">
                <ListboxButton className="relative flex items-center justify-between text-sm min-w-48 text-black pr-2.5 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25">
                  <span>{selected.name}</span>
                  <ChevronDownIcon
                    className="group pointer-events-none size-4"
                    aria-hidden="true"
                  />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom"
                  transition
                  className={clsx(
                    "w-[var(--button-width)] rounded-xl border bg-white p-1 [--anchor-gap:4px] focus:outline-none",
                    "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                  )}
                >
                  {people.map((person) => (
                    <ListboxOption
                      key={person.name}
                      value={person}
                      className="group flex justify-between cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-neutral-100"
                    >
                      <div className="flex gap-2">
                        <span className="text-sm/6 text-black">
                          {person.name}
                        </span>
                      </div>
                      <CheckIcon className="invisible size-4 fill-green-600 group-data-[selected]:visible" />
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div> */}
          </Field>

          <Field className="flex flex-col gap-1.00">
            <Label className="text-xs font-semibold">You will get</Label>
            <CurrencyInput readOnly />
          </Field>
        </Fieldset>
      </div>
    </form>
  );
};
