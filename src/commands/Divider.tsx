import * as React from "react";
import { ICommand } from "./";

interface IDevicder {
  className: string;
}

const DividerComponent = (props: IDevicder) => {
  return <div {...props}></div>;
};

export const Divider: ICommand = {
  name: "Divider",
  keyCommand: "Divider",
  tips: "Divider",
  icon: DividerComponent,
};
