import React from "react";

function P({ children, classModifiers }) {
  return (
    <p
      className={`text-base font-bodyFont text-white ${
        classModifiers ? classModifiers : ""
      }`}
    >
      {children}
    </p>
  );
}

export default P;
