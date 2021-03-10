import * as React from "react";
import { ICommand } from "./";

const Heading1Svg = () => {
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1029"
      width="12"
      height="12"
    >
      <path
        d="M584.9 445.3V142.6h86.5v735h-86.5V531.7H152.5v345.9H66.1v-735h86.5v302.6l432.3 0.1zM843.7 877.6v-0.3h-79.8V826h79.8V558.6c-22.5 23.4-49.9 40.4-79.8 49.3v-59.1c17.2-5.2 33.8-12.9 49.1-23 16.2-10.6 30.9-23.7 43.9-38.9h39.9V826h61.7v51.3h-61.7v0.3h-53.1z"
        p-id="1030"
      ></path>
    </svg>
  );
};

export const Heading1: ICommand = {
  name: "Heading1",
  keyCommand: "Heading1",
  icon: Heading1Svg,
};
