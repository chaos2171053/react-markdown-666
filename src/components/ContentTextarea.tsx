import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

export interface IContent
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  onValueChange?: Function;
  prefixCls: string;
  // ref: React.MutableRefObject<null>;
  autoFocus: boolean;
  defaultValue?: string;
  onKeyDownHandler?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => {};
}

export default forwardRef(function Content(props: IContent, ref) {
  const {
    onValueChange,
    prefixCls,
    autoFocus,
    onKeyDownHandler = () => {},
    defaultValue,
    value,
    ...others
  } = props;

  const textareaRef = useRef(null);

  const onContentValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newVal = e.target.value;
    onValueChange && onValueChange(newVal);
  };
  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      (textareaRef as any).current.focus();
    }
    return () => {};
  }, [autoFocus]);

  useImperativeHandle(ref, () => ({
    instance: textareaRef.current,
  }));

  return (
    <div className={prefixCls}>
      <textarea
        ref={textareaRef}
        onKeyDown={onKeyDownHandler}
        className={`${prefixCls}-input`}
        defaultValue={props.value}
        onChange={onContentValueChange}
        {...others}
      />
    </div>
  );
});
