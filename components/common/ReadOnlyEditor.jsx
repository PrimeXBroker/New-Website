import React from "react";

const ReadOnlyEditor = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default ReadOnlyEditor;
