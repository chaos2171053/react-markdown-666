import * as React from "react";
import { ITextApi } from "../utils/textApi";
import { ICommand } from "./";

const commandName = "NoOrderList";
const NoOrderListSvg = () => {
  return (
    <svg
      className="svg-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2663"
      width="12"
      height="12"
    >
      <path
        d="M132.608 204.288m-66.56 0a66.56 66.56 0 1 0 133.12 0 66.56 66.56 0 1 0-133.12 0Z"
        p-id="2664"
      ></path>
      <path
        d="M962.01728 158.80192l-680.68352 0.3584-0.04096 84.44928 680.7552-0.3584-0.03072-84.44928z"
        p-id="2665"
      ></path>
      <path
        d="M132.608 512m-66.56 0a66.56 66.56 0 1 0 133.12 0 66.56 66.56 0 1 0-133.12 0Z"
        p-id="2666"
      ></path>
      <path
        d="M281.33376 466.87232l-0.04096 84.44928 680.7552-0.3584-0.03072-84.44928-680.68352 0.3584z"
        p-id="2667"
      ></path>
      <path
        d="M132.608 819.712m-66.56 0a66.56 66.56 0 1 0 133.12 0 66.56 66.56 0 1 0-133.12 0Z"
        p-id="2668"
      ></path>
      <path
        d="M281.33376 775.59808l-0.04096 84.44928 680.7552-0.3584-0.03072-84.44928-680.68352 0.3584z"
        p-id="2669"
      ></path>
    </svg>
  );
};

const execute = (textApi: ITextApi) => {
  const prefix = "- ";

  const value = textApi.getText();
  const { selectionStart, selectionEnd } = textApi.getTextSelection();
  const valArr = value.slice(selectionStart, selectionEnd).split("\n");

  let newValArr = [];
  let newVal = "";
  newValArr = valArr.map((strLine: string, index: number) => {
    strLine = `${prefix} ${strLine}${index === valArr.length - 1 ? "" : "\n"}`;
    return strLine;
  });
  newVal = newValArr.join("");
  textApi.insertText(newVal);
  if (selectionStart === selectionEnd) {
    setTimeout(() => {
      textApi.setTextSelection({
        start: selectionStart + 2,
      });
    });
  }
};

export const NoOrderList: ICommand = {
  name: commandName,
  keyCommand: commandName,
  tips: "No Order List",
  icon: NoOrderListSvg,
  execute,
};
