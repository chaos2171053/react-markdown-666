import * as React from "react";
import { ICommand } from "./";

const commandName = "Bold";

const BoldSvg = () => {
  return (
    <svg
      className="svg-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1174"
      width="12"
      height="12"
    >
      <path
        d="M271.732987 168.739482h240.267013c30.084541 0 53.006096 0 81.555711 8.595583 25.991406 7.776956 45.22914 17.191166 68.662336 34.280004 17.293495 12.688718 31.824123 30.800839 42.875587 51.471171 11.767763 22.102928 17.191166 47.173379 17.191167 77.257919 0 38.577796-12.893375 72.960128-34.280004 94.449086-21.488958 25.786749-51.47117 42.875587-85.853503 55.768961 21.488958 0 38.577796 8.595583 60.066753 17.191167 17.191166 8.595583 32.847407 19.033077 47.173379 34.893974 25.172779 27.935645 25.582093 35.200959 33.768362 55.154991 9.925852 24.354152 9.209553 42.875587 9.209553 64.364545 0 30.084541-4.297792 60.066753-17.191166 81.555711-12.893375 21.488958-30.084541 42.875587-51.47117 60.066753-21.488958 17.191166-47.173379 30.084541-77.257919 38.577796-34.280004 8.595583-64.364545 12.893375-98.644549 12.893375H271.732987V168.739482z m94.346757 283.142601h128.72909c17.191166 0 34.280004 0 51.47117-4.297792 17.191166-4.297792 29.265914-9.41421 38.577796-17.191166 13.20036-11.051464 19.340062-18.112122 25.786749-30.084541 9.618867-17.907465 8.595583-30.084541 8.595583-47.173379 0-25.786749-9.41421-50.652543-25.786749-68.662336-24.865794-27.424003-43.284901-34.791646-81.555711-34.280004H366.079744v201.689218z m0 321.925052h137.324673c12.893375 0 30.084541 0 47.173379-4.297792 17.191166-4.297792 29.163585-7.162986 47.173378-17.191166 19.544719-10.846807 29.879884-19.544719 38.577796-34.280004 7.879285-13.302688 17.191166-34.280004 17.191166-60.066753 0-38.577796-7.469971-68.866993-36.940542-90.969921-29.572899-22.102928-66.001799-33.461377-113.175177-33.461377H366.079744v240.267013z m0 0"
        p-id="1175"
      ></path>
    </svg>
  );
};

const execute = ({ textareaIncetance }: { textareaIncetance: any }) => {
  const prefix = "**";
  const suffix = "**";
  textareaIncetance.insertText({
    prefix,
    suffix,
  });
};

export const Bold: ICommand = {
  name: commandName,
  keyCommand: commandName,
  tips: commandName,
  icon: BoldSvg,
  execute,
};
