import * as React from "react";
import { ICommand } from "./";

const commandName = "HorizontalLine";

const HorizontalLineSvg = () => {
  return (
    <svg
      className="svg-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1961"
      width="12"
      height="12"
    >
      <path d="M63.6 489.6h896.7v44.8H63.6z" p-id="1962"></path>
    </svg>
  );
};

const execute = ({ textareaIncetance }: { textareaIncetance: any }) => {
  const prefix = "\n------";
  const suffix = "\n";
  textareaIncetance.insertText({
    prefix,
    suffix,
  });
};

export const HorizontalLine: ICommand = {
  name: commandName,
  tips: commandName,
  keyCommand: commandName,
  icon: HorizontalLineSvg,
  execute,
};
