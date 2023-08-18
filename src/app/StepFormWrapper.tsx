import { ReactNode } from "react";
import { stepData } from "./stepdata";

type StepFormWrapperProps = {
  children: ReactNode;
};
export function StepFormWrapper({ children }: StepFormWrapperProps) {
  return (
    <div className="">
      {stepData.map((step) => {
        return (
          <div className="grid grid-cols-2 " key={step.stepId}>
            <div>
              <label className="h-10 mt-10 w-10 border bg-light-blue text-marine-blue border-light-gray  rounded-3xl  flex items-center justify-center">
                {step.stepId}
              </label>
            </div>
            <div className="flex flex-col mt-10 -left-10 relative">
              <label className="text-cool-gray text-sm">
                {step.stepNumber}
              </label>
              <span className="text-1xl font-bold mt-1">
                {step.stepDescription}
              </span>
            </div>
          </div>
        );
      })}
      {children}
    </div>
  );
}
