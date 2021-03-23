import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight as codeStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";

import "./ContentPreview.less";

export interface IContentPreview {
  value?: string;
}

const CodeBlockRenderer = ({ language, value }: any) => (
  <SyntaxHighlighter language={language} style={codeStyle}>
    {value || ""}
  </SyntaxHighlighter>
);

// use rel="noreferrer"
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
function LinkRenderer(props: any) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}

export default forwardRef(function ContentPreview(props: any, ref) {
  const { value, prefixCls, onScroll, ...others } = props;
  const previewRef = useRef(null);
  useImperativeHandle(ref, () => ({
    instance: previewRef.current,
  }));
  useEffect(() => {
    document
      .querySelector(`.${prefixCls}-preview-pannel`)
      ?.addEventListener("scroll", (e) => {
        onScroll && onScroll(e);
      });
    return () => {};
  }, []);

  return (
    <div {...others}>
      <ReactMarkdown
        className={`${prefixCls}-preview-pannel`}
        plugins={[gfm]}
        children={value || ""}
        renderers={{ code: CodeBlockRenderer, link: LinkRenderer }}
      />
    </div>
  );
});
