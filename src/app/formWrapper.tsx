import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <div className="formWrapper">
      <h1>{title}</h1>
      {children}
    </div>
  );
}
