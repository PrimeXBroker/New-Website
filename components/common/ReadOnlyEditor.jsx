import React from "react";

const ReadOnlyEditor = ({ content }) => {
  return (
    <div className="editor" dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default ReadOnlyEditor;
