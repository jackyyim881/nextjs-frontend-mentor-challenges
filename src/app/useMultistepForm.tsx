import React, { ReactElement, useState, useRef } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [activeColor, setActiveColor] = useState(steps.map(() => true) as any);

  const stepsInfo = [" Personal info", " Add-ons", " Plan", " Summary"];

  const r = useRef(1);

  function next() {
    setCurrentStepIndex((i: any) => {
      if (i >= steps.length - 1) return i;
      r.current = i + 1;
      console.log(`r.current:${r.current + 1}`);
      return i + 1;
    });
  }
  function setActiveNextColorHandler() {
    setActiveColor((prevIndex: any) => prevIndex + 1);
  }
  function setActivePrevColorHandler() {
    setActiveColor((prevIndex: any) => prevIndex - 1);
  }

  function back() {
    setCurrentStepIndex((i: any) => {
      if (i <= 0) return i;
      setActiveColor((prevIndex: any) => prevIndex - 1);
      r.current = i - 0;
      console.log(`r.current:${r.current} `);
      return i - 1;
    });
  }
  function goTo(index: number) {
    setCurrentStepIndex(index);
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
    setActiveColor,
    setActiveNextColorHandler,
    setActivePrevColorHandler,
    goTo,
  };
}
