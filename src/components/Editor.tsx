import React from "react";
import classnames from "classnames";
import Toolbar from "./Toolbar";
import ContentTextarea from "./ContentTextarea";
import ContentPreview from "./ContentPreview";
import "./Editor.less";
import { getCommands } from "../commands";

export interface EditorProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  className?: string;
  commands?: Array<any>;
  height?: number;
}

export default function Editor(props: EditorProps) {
  const {
    prefixCls = "md-editor",
    className,
    commands = getCommands(),
    height = 250,
  } = props;
  const clsStr = classnames(className, prefixCls);
  return (
    <>
      <div className={clsStr} style={{ height: 250 }}>
        <Toolbar prefixCls={prefixCls} commands={commands} />
        <div className={`${prefixCls}-content`}>
          <ContentTextarea prefixCls={`${prefixCls}-textarea`} />
          <ContentPreview className={`${prefixCls}-preview`} />
        </div>
      </div>
    </>
  );
}
