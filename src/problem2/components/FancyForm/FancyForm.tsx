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
import { SubmitButton } from "./ui";
import { useState } from "react";
import clsx from "clsx";
const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

export const FancyForm = () => {
  const [selected, setSelected] = useState(people[1]);

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
            <div className="shadow-[inset_0_0_0_1px] shadow-neutral-300 rounded-lg transition-all duration-75 hover:shadow-[inset_0_0_0_2px] hover:shadow-neutral-700 flex">
              <Input
                placeholder="0"
                name="amount"
                className="py-2.5 px-3 border-none rounded-lg shadow-none bg-inherit data-[focus]:outline-none flex-1"
              />
              <Listbox value={selected} onChange={setSelected}>
                <ListboxButton
                  className={clsx(
                    "relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-black",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                >
                  {selected.name}
                  {/* <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          /> */}
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom"
                  transition
                  className={clsx(
                    "w-[var(--button-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
                    "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                  )}
                >
                  {people.map((person) => (
                    <ListboxOption
                      key={person.name}
                      value={person}
                      className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                    >
                      {/* <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" /> */}
                      <div className="text-sm/6 text-black">{person.name}</div>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>
          </Field>

          <Field className="flex flex-col gap-1.5">
            <Label className="text-xs font-semibold">You will get</Label>
            <Input readOnly placeholder="0" />
          </Field>
        </Fieldset>
        <SubmitButton />
      </div>
    </form>
  );
};
