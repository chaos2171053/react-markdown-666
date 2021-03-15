import * as React from "react";
import { ITextApi } from "../utils/textApi";
import { ICommand } from "./";

const commandName = "LinkBlock";

const LinkBlockSvg = () => {
  return (
    <svg
      className="svg-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2962"
      width="12"
      height="12"
    >
      <path
        d="M426.666667 748.8l-75.52 73.386667a105.386667 105.386667 0 0 1-149.333334-149.333334l193.706667-194.133333a104.96 104.96 0 0 1 144.64-3.84l5.12 4.266667a42.666667 42.666667 0 0 0 59.733333-61.013334 117.333333 117.333333 0 0 0-7.68-8.96 190.293333 190.293333 0 0 0-259.84 9.386667l-196.266666 194.133333a191.146667 191.146667 0 0 0 270.08 270.08L485.12 810.666667A42.666667 42.666667 0 0 0 426.666667 748.8zM882.773333 141.226667a191.573333 191.573333 0 0 0-270.08 0L538.88 213.333333A42.666667 42.666667 0 0 0 597.333333 275.2l73.813334-73.386667a105.386667 105.386667 0 0 1 149.333333 149.333334l-193.706667 194.133333a104.96 104.96 0 0 1-144.64 3.84l-5.12-4.266667a42.666667 42.666667 0 0 0-59.733333 61.013334 117.333333 117.333333 0 0 0 9.813333 8.96 190.72 190.72 0 0 0 259.84-9.386667l194.133334-194.133333a191.573333 191.573333 0 0 0 1.706666-270.08z"
        p-id="2963"
      ></path>
    </svg>
  );
};

const execute = (textApi: ITextApi) => {
  const prefix = "[](https://example.com)";
  const suffix = "";
  textApi.insertText({
    prefix,
    suffix,
  });
};

export const LinkBlock: ICommand = {
  name: commandName,
  keyCommand: commandName,
  tips: commandName,
  icon: LinkBlockSvg,
  execute,
};
