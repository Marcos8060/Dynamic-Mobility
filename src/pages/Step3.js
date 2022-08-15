import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../redux/features/data';
import { useSelector } from 'react-redux';

const Step3 = ({ handleFormData, prevStep, values}) => {
  const dispatch  = useDispatch();

  // error state
  const [error,setError] = useState(false)

  const data = useSelector((store) => store.data.data)

  console.log('hello',data);


  useEffect(() =>{
    dispatch(getData())
  },[])

  const submitFormData = (e) =>{
    e.preventDefault();

    if(values.question3 === ''){
      setError(true);
    }else{
      handleFormData();
    }
  }

 

  return (
    <>
      <div className='bg-gray h-100v py-20'>
        <div className="bg-white shadow-2xl rounded p-4 md:w-8/12 w-11/12 mx-auto p-10">
        
            <h2 className='font-semibold mb-20'>What is the size of the farm?</h2>

           <form onSubmit={submitFormData}>
              <input  defaultValue={values.question3} onChange={handleFormData("question3")} id='question3' name='question3' className='p-2 focus:outline-none bg-gray w-7/12' type="text" placeholder='size of your farm...' />
                {
                  error ? (
                    <p className='text-sm text-red font-press-start'>This is a required field!</p>
                     ):(
                     ''
                   )
                }
              <br /> <br />
              <button type="submit" className='block float-right bg-blue px-4 py-1 font-semibold rounded text-white font-normal'>Finish</button>
              <button onClick={prevStep} className='mx-2 block float-right bg-blue px-4 py-1 font-semibold rounded text-white font-normal'>Previous</button>
           </form>

        </div> 
      </div>
    </>
  )
}

export default Step3;