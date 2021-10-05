import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

/**
 *
 * @param {{md: string|any}} props
 * @returns
 */
export const MDRenderer = (props) => {
  const { md } = props;
  return (
    <>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        remarkPlugins={[remarkGfm, remarkMath]}
        components={{
          code: CodeHighlighter,
          a: CustomLink,
        }}
      >
        {md}
      </ReactMarkdown>
    </>
  );
};

function CodeHighlighter({ node, inline, className, children, ...props }) {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      style={tomorrow}
      language={match[1]}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
}

function CustomLink({ href, children }) {
  const isInternalLink = href && href.startsWith("/");
  if (isInternalLink) {
    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
