import React, { ReactNode, useState } from "react";
import { StepFormWrapper } from "./StepFormWrapper";

interface Props {
  children: ReactNode;
  currentStepIndex: number;
  IndexStep: number;
}

export function StepForm({ children, currentStepIndex, IndexStep }: Props) {
  return (
    <>
      <form className="relative">
        <StepFormWrapper currentStepIndex={IndexStep}>
          {children}
        </StepFormWrapper>
      </form>
    </>
  );
}
