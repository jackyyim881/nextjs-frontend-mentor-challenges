"use client";
import React from "react";
import { useState } from "react";
import StepButton from "./stepButton";
type UserData = {
  name: string;
  email: string;
  phone: string;
};
type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};
export function Information({
  name,
  email,
  phone,
  updateFields,
}: UserFormProps) {
  return (
    <>
      <div className="right-size md:w-[650px] ">
        <h1 className="font-bold text-3xl     text-blue-950">Personal info</h1>
        <p className="  text-gray-500 text-paragraph    ">
          Please provide your name , email address , and phone number.{" "}
        </p>
        <div className="flex flex-col mt-5  relative max-w-[500px]">
          <div className="flex  flex-col  w-full justify-center mt-5 gap-2">
            <span className="text-sky-900  ">Name</span>
            <div className="">
              <input
                type="text"
                id="name"
                placeholder="e.g. Stephen King"
                className="w-full p-2 rounded-lg  text-gray-950 placeholder-slate-300 focus:border-purplish-blue focus:outline-none"
                value={name}
                onChange={(e) => updateFields({ name: e.target.value })}
              />
            </div>
          </div>
          <div className="flex  flex-col  w-full justify-center mt-5 gap-2">
            <span className="text-sky-900 text-paragraph">Email Address</span>
            <div className=" ">
              <input
                type="email"
                id="email"
                placeholder="e.g. stephenking@lorem.com"
                className="w-full p-2 rounded-lg  text-gray-950 placeholder-slate-300 focus:border-purplish-blue focus:outline-none"
                value={email}
                onChange={(e) => updateFields({ email: e.target.value })}
              />{" "}
            </div>
          </div>{" "}
          <div className="flex  flex-col  w-full justify-center mt-5 gap-2">
            <div className="flex justify-between	">
              <span className="text-sky-900">Phone Number</span>

              {phone.length < 1 && (
                <span className="text-red-500 after:content-['*'] ">
                  This field is required
                </span>
              )}
            </div>
            <input
              type="text"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              className="w-full p-2 rounded-lg  text-gray-950 placeholder-slate-300 focus:border-purplish-blue focus:outline-none  "
              value={phone}
              onChange={(e) => updateFields({ phone: e.target.value })}
            />
          </div>
        </div>
      </div>
    </>
  );
}

// "cool-gray": "hsl(231, 11%, 63%)",
// "light-gray": "hsl(229, 24%, 87%)",
// "purplish-blue": "hsl(243, 100%, 62%)",
// magnolia: "hsl(217, 100%, 97%)",
// "marine-blue": "hsl(213, 96%, 18%)",
// alabaster: "hsl(231, 100%, 99%)",
// "light-blue": "hsl(206, 94%, 87%)",
// "pastel-blue": "hsl(228, 100%, 84%)",

// const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     console.log(formData);
//     // Now you can handle or send the data as you wish
//   };
