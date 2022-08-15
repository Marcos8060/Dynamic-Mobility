import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../redux/features/data';
import { useSelector } from 'react-redux/es/exports';
import  chooseQuestion1 from '../redux/features/Questions';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

const Step1 = () => {
  const dispatch  = useDispatch();
  const history = useNavigate();

  const data = useSelector((store) => store.data.data)

  const question1 = useSelector((store) => store.question1)

  const { register,handleSubmit } = useForm({ defaultValues: { question1}})

  console.log('hello',data);


  useEffect(() =>{
    dispatch(getData())
  },[])

  const onSubmit =(info)=>{
    dispatch(chooseQuestion1(data.question1))
    history('/step2')
  }

  return (
    <>
      <div className='bg-gray h-100v py-20'>
        <div className="bg-white shadow-2xl rounded p-4 md:w-8/12 w-11/12 mx-auto p-10">
          <h2 className='font-semibold mb-20'>{data.strings.en.q_farmer_name}</h2>

           <form onSubmit={handleSubmit(onSubmit)}>
              <input id='question1' name='question1' ref={register} className='p-2 focus:outline-none bg-gray w-7/12' type="text" placeholder='Enter your answer...' /><br /> <br />
              <button className='block float-right bg-blue px-4 py-1 font-semibold rounded text-white font-normal'>Next</button>
           </form>

        </div> 
      </div>
    </>
  )
}

export default Step1;