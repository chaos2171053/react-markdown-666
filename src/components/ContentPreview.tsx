import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight as codeStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";

import "./ContentPreview.less";

export interface IContentPreview {
  value?: string;
}

const CodeBlock = ({ language, value }: any) => (
  <SyntaxHighlighter language={language} style={codeStyle}>
    {value}
  </SyntaxHighlighter>
);

export default function ContentPreview(props: any) {
  const { value, ...others } = props;
  return (
    <div {...others}>
      <ReactMarkdown
        plugins={[gfm]}
        children={value}
        renderers={{ code: CodeBlock }}
      />
    </div>
  );
}
