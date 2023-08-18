import React, { ReactNode } from "react";
import { StepFormWrapper } from "./StepFormWrapper";

interface Props {
  children: ReactNode;
}

export default function StepForm({ children }: Props) {
  return (
    <>
      <div className=" relative">
        <StepFormWrapper>{children}</StepFormWrapper>
      </div>
    </>
  );
}
