import * as React from "react";
import { ITextApi } from "../utils/textApi";
import { ICommand } from "./";
const commandName = "Heading2";
const Heading2Svg = () => {
  return (
    <svg
      className="svg-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1029"
      width="12"
      height="12"
    >
      <path
        d="M88 448h400V172c0-24.3 19.7-44 44-44s44 19.7 44 44v680c0 24.3-19.7 44-44 44s-44-19.7-44-44V536H88v316c0 24.3-19.7 44-44 44S0 876.3 0 852V172c0-24.3 19.7-44 44-44s44 19.7 44 44v276z m935.282 448H680c0.479-41.591 10.533-77.923 30.163-108.997 19.63-31.074 46.44-58.084 80.434-81.031 16.279-11.952 33.275-23.544 50.99-34.779 17.714-11.234 33.993-23.305 48.835-36.213 14.842-12.907 27.05-26.89 36.626-41.95 9.576-15.058 14.603-32.388 15.081-51.988 0-9.083-1.077-18.764-3.231-29.042-2.155-10.278-6.344-19.84-12.568-28.683-6.224-8.845-14.842-16.254-25.854-22.23-11.012-5.976-25.375-8.964-43.09-8.964-16.278 0-29.803 3.227-40.576 9.68-10.772 6.455-19.39 15.299-25.854 26.533-6.463 11.235-11.251 24.5-14.363 39.798-3.112 15.298-4.908 31.791-5.386 49.48h-81.87c0-27.728 3.71-53.423 11.13-77.087 7.422-23.664 18.553-44.101 33.395-61.311 14.842-17.21 32.916-30.715 54.222-40.516 21.305-9.8 46.081-14.7 74.33-14.7 30.641 0 56.255 5.02 76.843 15.059 20.587 10.04 37.224 22.707 49.912 38.005 12.688 15.298 21.665 31.91 26.931 49.838 5.267 17.927 7.9 35.018 7.9 51.272 0 20.078-3.112 38.244-9.336 54.498-6.224 16.254-14.603 31.193-25.136 44.818-10.533 13.625-22.502 26.174-35.908 37.647a538.302 538.302 0 0 0-41.653 32.27 1122.27 1122.27 0 0 0-43.09 28.683c-14.364 9.083-27.65 18.166-39.858 27.249-12.209 9.083-22.862 18.525-31.958 28.325-9.097 9.8-15.321 20.198-18.673 31.193h244.894V896z"
        p-id="1030"
      ></path>
    </svg>
  );
};
const execute = (textApi: ITextApi) => {
  const prefix = "## ";
  const suffix = "";
  const { selectionStart, selectionEnd } = textApi.getTextSelection();
  const selectVal = textApi.getTextBySelection({
    selectionStart,
    selectionEnd,
  });
  const newVal = `${prefix}${selectVal}${suffix}`;

  textApi.insertText(newVal);

  if (selectionStart === selectionEnd) {
    setTimeout(() => {
      textApi.setTextSelection({
        start: selectionStart + prefix.length,
        end: selectionStart + newVal.length - suffix.length,
      });
    });
  }
};
export const Heading2: ICommand = {
  name: commandName,
  keyCommand: commandName,
  tips: commandName,
  icon: Heading2Svg,
  execute,
};
