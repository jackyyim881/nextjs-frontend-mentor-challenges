"use client";

import React, { useState } from "react";

type Addon = {
  id: string;
  label: string;
  description: string;
  price: string;
};

type AddonsData = {
  addons: Addon[];
};
type AddOnsDataProp = AddonsData & {
  updateFields: (fields: Partial<AddonsData>) => void;
};
export function AddOns({ updateFields, addons }: AddOnsDataProp) {
  const [selectedAddon, setSelectedAddon] = useState<Addon | null>(null);
  const options: Addon[] = [
    {
      id: "service",
      label: "Online service",
      description: "Access to multiplayer games",
      price: `+${1}$/mo`,
    },
    {
      id: "storage",
      label: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: `+${2}$/mo`,
    },
    {
      id: "profile",
      label: "Customizable Profile",
      description: "Custom theme on your profile",
      price: `+${2}$/mo`,
    },
  ];
  function handleClicked(option: Addon) {
    setSelectedAddon(option);
    updateFields({ addons: [option] });
  }

  console.log(selectedAddon?.price, selectedAddon?.label); // You can see selected addon's price and label in console

  return (
    <>
      <div className="text-black right-size md:w-[650px] space-y-5">
        <div className=" flex flex-col">
          <label className="text-3xl font-bold">Pick add-ons</label>
          <div className="text-1xl text-gray-500 mt-2">
            Add-ons help enhance your gaming experience.
          </div>
        </div>
        <div className=" space-y-5  max-w-[500px]">
          {options.map((option) => (
            <div
              className="flex justify-between rounded-md border-2 p-4 hover:border-purplish-blue cursor-pointer hover:text-purplish-blue focus:rounded-lg"
              key={option.id}
              aria-label={`${option.id} option`}
            >
              <div className="flex items-center ">
                <input
                  type="checkbox"
                  id={option.id}
                  name="options"
                  className="form-checkbox text-indigo-600"
                  value={option.label}
                  onChange={() => handleClicked(option)}
                />
                <ul className="relative left-4">
                  <li className="flex">
                    <div className="flex flex-col">
                      <label htmlFor={option.id} className="font-bold">
                        {option.label}
                      </label>
                      <span className=" text-gray-500">
                        {option.description}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center ">{option.price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
