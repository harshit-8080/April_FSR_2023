import React, { memo } from "react";

function ChildComponet({ printStatus }) {
  console.log("Child Component rendering");
  return <h1>ChildComponet</h1>;
}

export default memo(ChildComponet);
