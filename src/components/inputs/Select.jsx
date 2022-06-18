import {React, useState} from 'react'
import ErrorP from '../typography/ErrorP';

function Select(props) {
    const [isValid] = useState(true)
  return (
    <div className='my-3 w-full'>
      <div className='flex flex-row gap-4'>
        <label htmlFor={props.id} className="text-shade_darker_white font-bodyFont text-base">
          {props.label}
        </label>
        {!isValid ? <ErrorP>{props.errormessage}</ErrorP> : null}
        
      </div>
      <select id={props.id}
        name={props.name}
        required={props.required}
        className="form-select w-full bg-darkmode_black8 border-none text-shade_darker_white font-bodyFont focus:ring-accent_yellow focus:ring-2"
        onChange={props.onChange}>
            {props.options.map((option) => <option key={option.value} value={option.value} className="font-bodyFont text-base appearance-none">{option.caption}</option>)}
      </select>
    </div>
  )
}

export default Select