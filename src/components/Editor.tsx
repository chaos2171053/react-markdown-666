import React from "react";
import classnames from "classnames";
import Toolbar from "./Toolbar";
import TextArea from "./TextArea";
import Preview from "./Preview";
import "./Editor.less";
import { getCommands } from "../commands";

export interface EditorProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  className?: string;
  commands?: Array<any>;
}

export default function Editor(props: EditorProps) {
  const {
    prefixCls = "md-editor",
    className,
    commands = getCommands(),
  } = props;
  const clsStr = classnames(className, prefixCls);
  return (
    <>
      <div className={clsStr}>
        <Toolbar prefixCls={prefixCls} commands={commands} />
        <div className={`${prefixCls}-content`}>
          <TextArea />
          <Preview />
        </div>
      </div>
    </>
  );
}
