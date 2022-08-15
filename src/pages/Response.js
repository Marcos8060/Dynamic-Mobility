import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Response = () => {
  const state = useSelector((state) => state)
  return (
    <>
    <pre>{JSON.stringify(state, null, 2)}</pre>
    <Link to='/step1'>Start again</Link>
    </>
  )
}

export default Response