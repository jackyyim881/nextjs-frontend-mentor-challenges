"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { useMultistepForm } from "./useMultistepForm";
import { PlanForm } from "./planForm";
import { Information } from "./information";
import { AddOns } from "./addOns";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { StepForm } from "./stepForm";
import { Summary } from "./summary";
export default function Home() {
  type FormData = {
    name: string;
    email: string;
    phone: string;
    plan: string;
    billing: string;
    addons: string;
  };
  const INITIAL_DATA: FormData = {
    name: "",
    email: "",
    phone: "",
    plan: "",
    billing: "",
    addons: "",
  };

  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  }

  const { steps, currentStepIndex, step, isLastStep, next, back, isFirstStep } =
    useMultistepForm([
      <Information key="Information" {...data} updateFields={updateFields} />,
      <PlanForm key="PlanForm" {...data} updateFields={updateFields} />,
      <AddOns key="AddOns" {...data} updateFields={updateFields} />,
      <Summary key="Summary" {...data} updateFields={updateFields} />,
    ]);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }

  return (
    <>
      <main className="flex min-h-screen flex-col bg-magnolia   items-center justify-center">
        <div className="flex max-w-[1440px] mx-auto  bg-white  p-5 relative  rounded-2xl  ">
          <aside className="flex  w-2/4    relative    ">
            <Image
              src="/bg-sidebar-desktop.svg"
              width={3000}
              className="absolute object-cover h-full  max-w-[250px]   rounded-md "
              alt="Picture of the author"
              height={300}
            />
            <div className="m-5 md:w-[250px] ">
              <StepForm IndexStep={currentStepIndex} />
            </div>
          </aside>
          <div className="relative  ml-20 md:h-[620px]">
            {step}
            <div className="flex justify-between    relative md:h-[250px]   items-center  ">
              <div className="">
                {!isFirstStep && (
                  <button
                    type="button"
                    className="  text-gray-500 "
                    onClick={back}
                    disabled={currentStepIndex === 0}
                  >
                    Go Back
                  </button>
                )}
              </div>

              <button
                className="bg-blue-500 hover:bg-marine-blue  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={next}
              >
                {isLastStep ? "Submit" : "Next Step"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
