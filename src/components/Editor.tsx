import React from "react";
import classnames from "classnames";
import Toolbar from "./Toolbar";
import TextArea from "./TextArea";
import Preview from "./Preview";
import "./Editor.less";

export interface EditorProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  className?: string;
}

export default function Editor(props: EditorProps) {
  const { prefixCls = "md-editor", className } = props;
  const clsStr = classnames(className, prefixCls);
  return (
    <>
      <div className={clsStr}>
        <Toolbar />
        <div className={`${prefixCls}-content`}>
          <TextArea />
          <Preview />
        </div>
      </div>
    </>
  );
}
