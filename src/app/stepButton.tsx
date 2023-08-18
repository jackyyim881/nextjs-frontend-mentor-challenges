import React from "react";
import { useMultistepForm } from "./useMultistepForm";
import Information from "./information";
import AddOns from "./addOns";
import PlanForm from "./planForm";

export default function StepButton() {
  const { steps, currentStepIndex, step, isLastStep, next, back, isFirstStep } =
    useMultistepForm([<Information />, <AddOns />, <summary>]);

  return (
    <>
      <div className=" text-neutral-950">
        {!isFirstStep && (
          <button type="button" className=" " onClick={back}>
            Go Back
          </button>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={next}
        >
          {isLastStep ? "Submit" : "Next"}
        </button>
      </div>
    </>
  );
}
