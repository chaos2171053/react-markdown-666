import React from "react";
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

export default function ContentPreview(props: any) {
  const { value, ...others } = props;
  return (
    <div {...others}>
      <ReactMarkdown
        plugins={[gfm]}
        children={value || ""}
        renderers={{ code: CodeBlockRenderer, link: LinkRenderer }}
      />
    </div>
  );
}
