import React from 'react';
import PersonForm from './PersonForm';
import P from './typography/P';

function PersonFormContainer(props) {
  return (
      <div>
        <div className='bg-darkmode_black3 w-fit px-2 py-1 text-shade_darker_white'>
            <P>{props.title}</P>
        </div> 
        <div className='bg-darkmode_black3 p-2 lg:p-4'>
            <PersonForm {...props}></PersonForm>
        </div>
        
      </div>
    
  )
}

export default PersonFormContainer