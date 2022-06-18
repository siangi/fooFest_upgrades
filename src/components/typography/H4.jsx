import React from "react";

function H4(props) {
  return (
    <div
      className={`text-xl font-bodyFont ${
        props.classModifiers ? props.classModifiers : ""
      }`}
    >
      {props.children}
    </div>
  );
}

export default H4;
