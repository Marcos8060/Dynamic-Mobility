import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../redux/features/data';
import { useSelector } from 'react-redux/es/exports';

const Survery = () => {
  const dispatch  = useDispatch();

  const data = useSelector((store) => store.data.data)

  console.log('hello',data);


  useEffect(() =>{
    dispatch(getData())
  },[])

  return (
    <>
      <div className='bg-gray h-100v py-20'>
        <div className="bg-white shadow-2xl rounded p-4 w-8/12 mx-auto p-10">
          <h2 className='font-semibold mb-20'>What is your name?</h2>
            <input name='answer1' className='p-2 focus:outline-none bg-gray w-80' type="text" placeholder='Enter your answer...' /><br /> <br />
            <button className='block float-right bg-blue px-4 py-1 font-semibold rounded text-white font-normal'>Next</button>
        </div>
      </div>
    </>
  )
}

export default Survery