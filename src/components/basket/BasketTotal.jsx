import React from 'react';
import P from '../typography/P';

function BasketTotal(props) {
  return (
    <li className='grid grid-cols-4'>
      <P classModifiers="col-start-1 col-end-3 self-center font-bold">{props.title}</P>
      <P classModifiers="col-start-4 self-center font-bold">{props.price} Kr.</P>

    </li>
  )
}

export default BasketTotal