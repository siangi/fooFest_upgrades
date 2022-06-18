import React from 'react'

function H3(props) {
  return (
    <div className={`text-2xl font-bodyFont font-bold ${props.classModifiers ? props.classModifiers : ""}`}>{props.children}</div>
  )
}

export default H3