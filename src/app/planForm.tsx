import React from "react";
import { useState } from "react";
import Image from "../../node_modules/next/image";
export default function PlanForm() {
  const [selectedBorder, setSelectedBorder] = useState<string[]>([]);
  function handleBorderClicked(border: string) {
    if (selectedBorder?.includes(border)) {
      setSelectedBorder(selectedBorder.filter((item: any) => item !== border));
    } else {
      setSelectedBorder([...selectedBorder, border]);
    }
  }

  const plans = [
    { name: "Arcade", price: "$9/mo", icon: "/icon-arcade.svg" },
    { name: "Advanced", price: "$12/mo", icon: "/icon-advanced.svg" },
    { name: "Pro", price: "$15/mo", icon: "/icon-pro.svg" },
  ];

  return (
    <div className="  text-marine-blue mt-10">
      <div className="flex flex-col">
        <label className="font-bold text-3xl">Select your plan.</label>
        <span className="text-sm">
          {" "}
          You have the option of monthly or yearly billing
        </span>
      </div>
      <div className="mt-10 ">
        {plans.map((plan) => (
          <button
            key={plan.name}
            className={`formBorder ${
              selectedBorder.includes(plan.name)
                ? "border-2 border-slate-900"
                : ""
            }`}
            onClick={() => handleBorderClicked(plan.name)}
          >
            <Image src={plan.icon} alt="" width={50} height={50} />
            <div className="mt-10 w-10 flex relative flex-col">
              <label className="">{plan.name}</label>
              <span>{plan.price}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="flex  max-w-full justify-center items-center">
        <label htmlFor="">Monthly</label>
        <label className="relative inline-flex items-center cursor-pointer ">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <label htmlFor="">Yearly</label>
      </div>
    </div>
  );
}
