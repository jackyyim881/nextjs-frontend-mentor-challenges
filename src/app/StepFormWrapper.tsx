import { ReactNode } from "react";
import { stepData } from "./stepdata";
import ClickButton from "./page";
import { useState } from "react";
import { useMultistepForm } from "./useMultistepForm";
type StepFormWrapperProps = {
  children: ReactNode;
  currentStepIndex: number;
  prevFromStep: number;
};

export function StepFormWrapper({
  children,
  currentStepIndex,
  prevFromStep,
}: StepFormWrapperProps) {
  // function ColorHandler(index: number) {
  //   const setActiveColorHandler = () => {
  //     setCurrentStep(currentStep + 1);
  //   };

  //   setActiveColorHandler();
  // }

  return (
    <div>
      <div>
        {stepData?.map((step, i) => (
          <div key={i} className={`grid-item`}>
            <div className={`flex items-center mx-auto`}>
              <div
                className={`step-item ${
                  currentStepIndex === i + 0
                    ? `active bg-light-blue`
                    : "bg-transparent text-white"
                }`}
              >
                <span className="step">{i + 1}</span>
              </div>
            </div>
            <div className="text-1xl grid text-white font-bold">
              <label className="text-sm text-light-gray font-medium">
                {step.stepNumber}
              </label>
              <span className="w-40">{step.stepDescription}</span>
            </div>
          </div>
        ))}

        {children}
      </div>
    </div>
  );
}
// {stepData?.map((step, i) => (
//   <div key={i} className={`grid-item`}>
//     <div className={`flex items-center mx-auto     `}>
//       <div
//         className={`step-item    ${
//           currentStep === i + 1
//             ? `active bg-light-blue`
//             : "   bg-transparent text-white"
//         }`}
//       >
//         <span className="step">{i + 1}</span>
//       </div>
//     </div>
//     <div className="text-1xl grid     text-white font-bold ">
//       <label className=" text-sm    text-light-gray font-medium">
//         {step.stepNumber}
//       </label>
//       <span className="w-40">{step.stepDescription}</span>
//     </div>
//   </div>
// ))}
