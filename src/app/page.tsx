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
      <main className="flex min-h-screen  bg-red-200 flex-col items-center justify-center">
        <div className="flex  bg-white h-[700px]   p-5 relative  rounded-2xl  ">
          <aside className="flex w-96">
            <Image
              src="/bg-sidebar-desktop.svg"
              width={300}
              className="absolute  md:h-[650px] object-cover"
              alt="Picture of the author"
              height={300}
            />
            <div className="p-6">
              <StepForm IndexStep={currentStepIndex} />
            </div>
          </aside>
          <div>
            {step}
            <div className="flex justify-between     mt-10  items-center ">
              <div>
                {!isFirstStep && (
                  <button
                    type="button"
                    className="  text-gray-500"
                    onClick={back}
                    disabled={currentStepIndex === 0}
                  >
                    Go Back
                  </button>
                )}
              </div>

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={next}
              >
                {isLastStep ? "Submit" : "Next Step"}
              </button>
              <div className=" text-black">
                {currentStepIndex + 1} / {steps.length}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
