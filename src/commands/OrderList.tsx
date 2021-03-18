import * as React from "react";
import { ITextApi } from "../utils/textApi";
import { ICommand } from "./";

const OrderListSvg = () => {
  return (
    <svg
      className="svg-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2518"
      width="12"
      height="12"
    >
      <path
        d="M341 128h614v81H341zM341 470h614v80H341zM341 812h614v79H341zM153 121v175h44V42h-34.2l-0.8 2c-8.2 25.5-31.7 46.5-69.9 62.6l-2.1 0.7v45l5-1.9c23.7-9.6 42-19.6 58-29.4zM242 598H129.2c11.8-15 29.9-31.3 54-49.2 44.9-28.9 65.6-60.2 61.6-92.7-3.3-45.8-30.6-70.2-81.2-72.6-43.8 0-73.8 20.9-89.2 62.3l-1.1 3.1 44.3 19.3 1-3.9c6.7-24.5 19.9-36.8 40.4-37.5 26.6 0 39 10.1 39 32.2 1.4 17.5-14.7 38.3-48.1 61.8-34.9 25.3-61.8 54.7-80 87.8l-0.4 28.4H242v-39zM205 845c22.4-11 33.7-28 33.7-50.8-1.7-46.6-28.9-70.8-81.2-71.6-44 0.9-72 23.5-83.4 67.4l-0.9 3.4 47 11.1 0.7-3.5c4.5-22.9 16.9-34.7 37.8-36.1 21.1 0.7 31.3 9.6 32.1 28C189.3 816 174.9 827 147 827h-23v42h32.3c27.3 1 41.6 11.4 43.8 32.9 0.3 13.4-2.9 22.9-9.4 29.5-6.7 6.7-17.5 9.6-31.9 9.6h-2.4c-24.1-1-37.4-13.2-40.3-39l-0.5-3.6-47 11.1 0.7 3.3c8.9 44.8 39 68 89.5 68.8 56-2.4 86-28.5 89.3-77.8-0.7-25.8-15.2-45.6-43.1-58.8z"
        p-id="2519"
      ></path>
    </svg>
  );
};
const execute = (textApi: ITextApi) => {
  const prefix = "1. ";
  const suffix = "";
  textApi.insertText({
    prefix,
    suffix,
  });
};

export const OrderList: ICommand = {
  name: "OrderList",
  keyCommand: "OrderList",
  tips: "Order List",
  icon: OrderListSvg,
  execute,
};
