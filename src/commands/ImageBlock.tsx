import * as React from "react";
import { ICommand } from "./";

const ImageBlockSvg = () => {
  return (
    <svg
      className="svg-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2368"
      width="12"
      height="12"
    >
      <path
        d="M778 183.8H247c-50.8 0-92 41.2-92 92v435c-1.2 4.8-1.2 9.4 0 14v23.6c0 50.8 41.2 92 92 92h531c50.8 0 92-41.2 92-92V275.8c0-50.8-41.2-92-92-92z m-531 56h531c19.8 0 36 16.2 36 36v349.4c-20.8-28.2-46-59-72.2-83.4-15.6-14.6-35-20.6-56.2-17.6-33.4 4.8-70 32.6-111.8 84.8-10 12.4-19 24.8-26.4 35.4-36.8-50.8-109.2-144.6-170.6-187.8-18.2-12.8-38.6-15.8-59.4-9-22.6 7.4-44.6 26.6-67 58.6-13 18.4-26.2 41.2-39.6 68V275.8c0.2-20 16.2-36 36.2-36z"
        p-id="2369"
      ></path>
      <path
        d="M632 374.8a63 63 0 1 0 126 0 63 63 0 1 0-126 0z"
        p-id="2370"
      ></path>
    </svg>
  );
};

export const ImageBlock: ICommand = {
  name: "ImageBlock",
  keyCommand: "ImageBlock",
  tips: "Image Block",
  icon: ImageBlockSvg,
};
