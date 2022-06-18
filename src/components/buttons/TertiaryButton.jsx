import React from 'react'

function TertiaryButton(props) {
  return (
    <button className="text-shade_darker_white tracking-wider uppercase border-b-shade_darker_wite border-b-2 px-2 py-0.5" 
    onClick={props.action}>
        {props.caption}
        </button>
  )
}

export default TertiaryButton