import React, {
  useState,
  useRef,
  useEffect,
  MutableRefObject,
  useCallback,
} from "react";
import classnames from "classnames";
import Toolbar from "./Toolbar";
import ContentTextarea from "./ContentTextarea";
import ContentPreview from "./ContentPreview";
import "./Editor.less";
import { getCommands, ICommand } from "../commands";
import { TextApi } from "../utils";
import hotKey from "../utils/hotKey";

export interface EditorProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  prefixCls?: string;
  className?: string;
  commands?: Array<any>;
  height?: number;
  onChange?: Function;
  value?: string;
  defaultValue?: string;
  autoFocus?: boolean;
}

export interface ItextareaIncetance extends MutableRefObject<null> {
  setTextareaValue?: Function;
  textareaIncetance?: React.KeyboardEvent<HTMLTextAreaElement>;
}

export default function Editor(props: EditorProps) {
  const {
    prefixCls = "md-editor-666",
    className,
    commands = getCommands(),
    height = 500,
    onChange,
    autoFocus = true,
    defaultValue,
  } = props;
  const [value, setValue] = useState(props.value || "");
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const textareaRef = useRef(null);
  const previewRef = useRef(null);
  const leftScroll = useRef(false);
  const textareaIncetance: ItextareaIncetance | null = useRef(null);

  const onTextareaChange = useCallback(
    (newVal: string) => {
      // TODO: The setValue method makes componnet too slow
      setValue(newVal);
      onChange && onChange(newVal);
    },
    [onChange]
  );

  const clsStr = classnames(className, prefixCls);
  const onCommandClick = (command: ICommand) => {
    let instance = null;
    if (textareaIncetance && textareaIncetance.current) {
      instance = textareaIncetance?.current;
      instance && command.execute && command.execute(instance);
    }
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    hotKey(e, textareaIncetance.current);
  };

  const onContentTextareaScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    const scrollTop = (e.target as HTMLElement).scrollTop;
    const previewInstance = ((previewRef.current as unknown) as {
      instance: HTMLElement;
    }).instance as HTMLElement;
    const textareaRef = ((previewRef.current as unknown) as {
      instance: HTMLElement;
    }).instance as HTMLElement;

    // content scroll
    if (leftScroll.current && previewRef.current) {
      previewInstance.scrollTop = scrollTop;
    } else {
      // preview scroll
      textareaRef.scrollTop = previewInstance.scrollTop;
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      (textareaIncetance.current as any) = new TextApi(
        textareaRef.current,
        setValue
      );
    }
    return () => {};
  }, []);

  return (
    <>
      <div className={clsStr} style={{ height }}>
        <Toolbar
          prefixCls={prefixCls}
          commands={commands}
          onCommandClick={onCommandClick}
        />
        <div className={`${prefixCls}-content`}>
          <ContentTextarea
            prefixCls={`${prefixCls}-textarea`}
            value={value}
            onScroll={onContentTextareaScroll}
            onKeyDown={onKeyDownHandler}
            onValueChange={onTextareaChange}
            ref={textareaRef}
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            onMouseOver={() => (leftScroll.current = true)}
            onMouseLeave={() => (leftScroll.current = false)}
          />
          <ContentPreview
            className={`${prefixCls}-preview`}
            value={value}
            ref={previewRef}
            onScroll={onContentTextareaScroll}
          />
        </div>
      </div>
    </>
  );
}
