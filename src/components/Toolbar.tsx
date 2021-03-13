import React from "react";
import "./Toolbar.less";
import { ICommand } from "../commands/index";
interface ToolbarProps {
  prefixCls: string;
  commands: Array<any>;
  onCommandClick: Function;
}
export default function Toolbar(props: ToolbarProps) {
  const { prefixCls, commands, onCommandClick } = props;
  const baseClsStr = `${prefixCls}-toolbar`;

  return (
    <div className={baseClsStr}>
      <ul className={`${baseClsStr}-ul`}>
        {commands.map((command: ICommand, index) => {
          if (command.name === "Divider") {
            return (
              <li key={index} className={`${baseClsStr}-devider-wrapper`}>
                {command.icon({ className: `${baseClsStr}-divider` })}
              </li>
            );
          }
          return (
            <li key={index} title={command.tips}>
              <button
                className={`${baseClsStr}-button`}
                onClick={(e: any) => {
                  e.stopPropagation();
                  onCommandClick(command);
                }}
              >
                {command.icon()}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
