import DOMPurify from "dompurify";
import React from "react";

interface IStringToHtmlProps {
  text: string | React.ReactNode | React.JSX.Element | null;
}

const StringToHtml = ({
  text,
}: IStringToHtmlProps): React.ReactNode | React.JSX.Element | null => {
  if (typeof text === "string") {
    const sanitizedData = DOMPurify.sanitize(text);
    return <div dangerouslySetInnerHTML={{ __html: sanitizedData }} />;
  }
  return text;
};

export default StringToHtml;
