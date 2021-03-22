import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

export interface IContent
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onScroll"> {
  value?: string;
  onValueChange?: Function;
  prefixCls: string;
  // ref: React.MutableRefObject<null>;
  autoFocus: boolean;
  defaultValue?: string;
  onScroll?: (e: React.UIEvent<HTMLTextAreaElement>) => void;
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
    onScroll,
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
        onScroll={onScroll}
        ref={textareaRef}
        onKeyDown={onKeyDownHandler}
        className={`${prefixCls}-input`}
        defaultValue={defaultValue}
        value={value}
        onChange={onContentValueChange}
        {...others}
      />
    </div>
  );
});
