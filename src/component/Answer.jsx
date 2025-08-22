import React, { useEffect, useState } from "react";

import { checkHeading, replaceHeadingStars } from "../helper";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Answer = ({ ans, totalResult, index, type }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);
  useEffect(() => {
    // console.log(ans, checkHeading(ans));
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStars(ans));
    }
  }, []);

  const components = {
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={dark}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code
          className="bg-gray-800 text-pink-300 px-1 py-0.5 rounded"
          {...props}
        >
          {children}
        </code>
      );
    },
  };

  return (
    <>
      {index === 0 && totalResult > 1 ? (
        <span className="text-xl block text-white"> {answer} </span>
      ) : heading ? (
        <span className="pt-2 text-lg block text-white"> {answer}</span>
      ) : (
        <span className={type === "q" ? "pl-1" : "pl-5"}>
          <ReactMarkdown components={components}>{answer}</ReactMarkdown>
        </span>
      )}
    </>
  );
};

export default Answer;
