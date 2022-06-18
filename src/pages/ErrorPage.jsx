import React from 'react'
import H1 from '../components/typography/H1'
import H2 from '../components/typography/H2'

export default function ErrorPage() {
  return (
    <div className='bg-white flex flex-col'>
        <H1>Oh no...</H1>
        <H2>You have entered an unvalid url</H2>
    </div>
  );
}