"use client";
import React from "react";
import { useState } from "react";
import StepButton from "./stepButton";
export default function Information() {
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
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className=" relative gap-2  mt-10   mr-14 ">
          <h1 className="font-bold text-3xl     text-blue-950">
            Personal info
          </h1>
          <p className="  text-gray-500 text-paragraph    ">
            Please provide your name , email address , and phone number.{" "}
          </p>
          <div className="flex  flex-col gap-2">
            <span className="text-sky-900  ">Name</span>
            <div className="w-96 border  border-gray-400">
              <input
                type="text"
                id="name"
                placeholder="e.g. Stephen King"
                className="w-96 p-2 border-gray-400 border text-gray-950"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="text-sky-900 text-paragraph">Email Address</span>
            <div className="w-96 border border-gray-400">
              <input
                type="email"
                id="email"
                placeholder="e.g. stephenking@lorem.com"
                onChange={handleChange}
                className="w-96 p-2 border-gray-400 border text-gray-950"
              />{" "}
            </div>
          </div>{" "}
          <div className="flex flex-col gap-2 ">
            <div className="flex justify-between	">
              <span className="text-sky-900">Phone Number</span>

              {formData.phone.length < 1 && (
                <span className="text-red-500 ">This field is required</span>
              )}
            </div>
            <input
              type="text"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              className="w-96 p-2 border-gray-400 border text-gray-950"
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}
