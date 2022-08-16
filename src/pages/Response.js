import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Response = ({ values }) => {
  const state = useSelector((state) => state)

  const { question1, question2, question3 } = values;

  return (
    <>
    <div className='bg-white shadow-2xl p-10 w-8/12 mx-auto mt-4'>
      <h1 className='mb-10 font-semibold font-press-start uppercase text-center underline'>View Your Responses</h1>
      <p>Name: {question1}{" "}</p>
      <p>Gender: {question2}{" "}</p>
      <p>Size: {question3}{" "}</p>
    </div>
    </>
  )
}

export default Response