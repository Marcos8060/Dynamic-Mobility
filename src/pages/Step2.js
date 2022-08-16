import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../redux/features/data';

const Step2 = ({ nextStep, handleFormData, prevStep, values}) => {
  const [error,setError] = useState(false)

  const dispatch  = useDispatch();

  // const data = useSelector((store) => store.data.data)

  // console.log('hello',data);


  useEffect(() =>{
    dispatch(getData())
  },[])

  const submitFormData = (e) =>{
    e.preventDefault();

    if(values.question2 === ''){
      setError(true);
    }else{
      nextStep()
    }
  }

  return (
    <>
      <div className='bg-gray h-100v py-20'>
        <div className="bg-white shadow-2xl rounded p-4 md:w-8/12 w-11/12 mx-auto p-10">

            <h2 className='font-semibold mb-20'>What is the gender of the farmer?</h2>

           <form onSubmit={submitFormData}>
              <select className=" mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-400 focus:border-blue-500 block w-7/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="question2" id="question2" defaultValue={values.question2} onChange={handleFormData("question2")}>
                <option defaultValue>--Select gender--</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
                {
                  error ? (
                    <p className='text-sm text-red font-press-start'>This is a required field!</p>
                     ):(
                     ''
                   )
                }
              <button className='mx-2 block float-right bg-blue px-4 py-1 font-semibold rounded text-white font-normal'>Next</button>
              <button onClick={prevStep} className='block float-right bg-blue px-4 py-1 font-semibold rounded text-white font-normal'>Previous</button>
           </form>

        </div> 
      </div>
    </>
  )
}

export default Step2;