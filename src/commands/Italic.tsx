import * as React from "react";
import { ICommand } from "./";

const commandName = "Italic";
const ItalicSvg = () => {
  return (
    <svg
      className="svg-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1464"
      width="12"
      height="12"
    >
      <path
        d="M809.324 142.941v65.194h-99.109l-247.77 607.244h99.109v65.68H214.676v-65.68h99.109l247.769-607.245h-99.109V142.94h346.879z"
        p-id="1465"
      ></path>
    </svg>
  );
};

const execute = ({ textareaIncetance }: { textareaIncetance: any }) => {
  const prefix = "*";
  const suffix = "*";
  textareaIncetance.insertText({
    prefix,
    suffix,
  });
};

export const Italic: ICommand = {
  name: commandName,
  keyCommand: commandName,
  tips: commandName,
  icon: ItalicSvg,
  execute,
};
