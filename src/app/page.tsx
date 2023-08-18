"use client";
import { useState } from "react";
import Image from "next/image";
import { useMultistepForm } from "./useMultistepForm";
import PlanForm from "./planForm";
import Information from "./information";
import AddOns from "./addOns";
import StepButton from "./stepButton";
import Slides from "./slides";
import { StepFormWrapper } from "./StepFormWrapper";
import StepForm from "./stepForm";
import Summary from "./summary";
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    // Now you can handle or send the data as you wish
  };
  const mysteps = [<Information />, <PlanForm />, <AddOns />, <Summary />];
  const {
    steps,
    currentStepIndex,
    step,
    isLastStep,
    next,
    back,
    isFirstStep,
    activeColor,
  } = useMultistepForm(mysteps);

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
              <StepForm />
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
                  >
                    Go Back
                  </button>
                )}
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
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
