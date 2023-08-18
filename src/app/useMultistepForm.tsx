import React, { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [activeColor, setActiveColor] = useState(steps.map(() => false));

  const stepsInfo = [" Personal info", " Add-ons", " Plan", " Summary"];

  const updateActiveColor = (index: number | null) => {
    setActiveColor(activeColor.map((_, i) => i === index));
  };

  function next() {
    setCurrentStepIndex((i: any) => {
      if (i >= steps.length - 1) return i;
      updateActiveColor(i + 1);
      return i + 1;
    });
  }
  function back() {
    setCurrentStepIndex((i: any) => {
      if (i <= 0) return i;
      updateActiveColor(i - 1);
      return i - 1;
    });
  }
  function goTo(index: number) {
    setCurrentStepIndex(index);
    updateActiveColor(index);
  }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    activeColor,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    back,
    next,
    goTo,
  };
}
