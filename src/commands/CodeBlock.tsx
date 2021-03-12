import * as React from "react";
import { ICommand } from "./";

const CodeBlockSvg = () => {
  return (
    <svg
      className="svg-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2106"
      width="12"
      height="12"
    >
      <path
        d="M902.4 454.4l-144-144a40.704 40.704 0 0 0-57.6 57.6L844.8 512l-144 144a40.704 40.704 0 0 0 57.6 57.6L902.4 569.6a81.472 81.472 0 0 0 0-115.2zM265.6 310.4L121.6 454.4a81.472 81.472 0 0 0 0 115.2l144 144a40.704 40.704 0 0 0 57.6-57.6L179.2 512l144-144a40.704 40.704 0 0 0-57.6-57.6z m109.568 544.064L570.24 147.904a40.704 40.704 0 0 1 78.528 21.632l-195.072 706.56a40.704 40.704 0 0 1-78.528-21.696z"
        p-id="2107"
      ></path>
    </svg>
  );
};

export const CodeBlock: ICommand = {
  name: "CodeBlock",
  keyCommand: "CodeBlock",
  tips: "Code Block",
  icon: CodeBlockSvg,
};
