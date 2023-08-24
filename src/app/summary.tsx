import React from "react";
import Link from "../../node_modules/next/link";

export function Summary() {
  return (
    <>
      <div className="flex flex-col">
        <label className="text-3xl mt-10 font-bold  text-marine-blue	">
          Finishing up
        </label>
        <span className=" text-gray-400">
          Double-check everything looks OK before confirming.
        </span>
      </div>
      <div className=" mt-10 bg-alabaster  text-marine-blue">
        <ul className="relative  left-4">
          <li className="flex flex-col">
            <div className="flex flex-col">
              <label className="font-bold">{""}</label>
            </div>
            <Link
              className=" hover:underline active:text-light-blue "
              href={""}
            >
              Change
            </Link>
          </li>
        </ul>
        <ul className=" relative left-4">
          <li className="flex">
            <div className="flex flex-col">
              <label className="font-bold">{""}</label>
              <span className=" text-gray-500">{}</span>
            </div>
          </li>
        </ul>
        <ul className=" relative left-4">
          <li className="flex">
            <div className="flex flex-col">
              <label htmlFor="service" className="font-bold">
                Online service
              </label>
              <span className=" text-gray-500">{""}</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex justify-between ">
        <div className="text-gray-400">
          Total <span className=""> (per month/year)</span>
        </div>
        <div className=" text-marine-blue">
          {" "}
          <span>/mo</span>
        </div>
      </div>
    </>
  );
}
