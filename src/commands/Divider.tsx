import * as React from "react";
import { ICommand } from "./";

interface IDevicder {
  className: string;
}
const commandName = "Divider";
const DividerComponent = (props: IDevicder) => {
  return <div {...props}></div>;
};

export const Divider: ICommand = {
  name: commandName,
  keyCommand: commandName,
  tips: commandName,
  icon: DividerComponent,
};
