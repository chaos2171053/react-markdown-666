import React from "react";
import "./Toolbar.less";
interface ToolbarProps {
  prefixCls: string;
  commands: Array<any>;
}
export default function Toolbar(props: ToolbarProps) {
  const { prefixCls, commands } = props;
  return (
    <div className={`${prefixCls}-toolbar`}>
      <ul>
        {commands.map((command, index) => {
          return <li key={index}>{command.icon()}</li>;
        })}
      </ul>
    </div>
  );
}
