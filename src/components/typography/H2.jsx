import React from "react";

function H2({ children, classModifiers }) {
  return (
    <h2
      className={`text-3xl font-displayFont text-white ${
        classModifiers ? classModifiers : ""
      }`}
    >
      {children}
    </h2>
  );
}

export default H2;
