import React, { useState } from "react";
import classnames from "classnames";
import Toolbar from "./Toolbar";
import ContentTextarea from "./ContentTextarea";
import ContentPreview from "./ContentPreview";
import "./Editor.less";
import { getCommands } from "../commands";

export interface EditorProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  prefixCls?: string;
  className?: string;
  commands?: Array<any>;
  height?: number;
  onChange?: Function;
  value?: string;
}

export default function Editor(props: EditorProps) {
  const {
    prefixCls = "md-editor",
    className,
    commands = getCommands(),
    height = 500,
    onChange,
  } = props;
  const [value, setValue] = useState(props.value || "");
  const onTextareaChange = (newVal: string) => {
    setValue(newVal);
    onChange && onChange(newVal);
  };

  const clsStr = classnames(className, prefixCls);
  return (
    <>
      <div className={clsStr} style={{ height }}>
        <Toolbar prefixCls={prefixCls} commands={commands} />
        <div className={`${prefixCls}-content`}>
          <ContentTextarea
            prefixCls={`${prefixCls}-textarea`}
            value={value}
            onValueChange={onTextareaChange}
          />
          <ContentPreview className={`${prefixCls}-preview`} value={value} />
        </div>
      </div>
    </>
  );
}
