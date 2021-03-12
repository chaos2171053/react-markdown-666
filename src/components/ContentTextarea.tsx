import React, { useState } from "react";

export interface IContent
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  onValueChange?: Function;
  prefixCls: string;
}

export default function Content(props: IContent) {
  const { onValueChange, prefixCls, ...others } = props;
  const [value, setValue] = useState(props.value);
  const onContentValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newVal = e.target.value;
    setValue(newVal);
    onValueChange && onValueChange(newVal);
  };
  return (
    <div className={prefixCls}>
      <textarea
        className={`${prefixCls}-input`}
        value={value}
        onChange={onContentValueChange}
        {...others}
      />
    </div>
  );
}
