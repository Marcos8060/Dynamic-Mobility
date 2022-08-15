import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../redux/features/data';
import { useSelector } from 'react-redux/es/exports';
import  chooseQuestion3 from '../redux/features/Questions';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

const Step3 = () => {
  const dispatch  = useDispatch();
  const history = useNavigate();

  const data = useSelector((store) => store.data.data)

  const question3 = useSelector((store) => store.question1)

  const { register,handleSubmit } = useForm({ defaultValues: { question3}})

  console.log('hello',data);


  useEffect(() =>{
    dispatch(getData())
  },[])

  const onSubmit =(info)=>{
    dispatch(chooseQuestion3(data.question3))
    history('/response')
  }

  return (
    <>
      <div className='bg-gray h-100v py-20'>
        <div className="bg-white shadow-2xl rounded p-4 md:w-8/12 w-11/12 mx-auto p-10">
          <h2 className='font-semibold mb-20'>{data.strings.en.q_size_of_farm}</h2>

           <form onSubmit={handleSubmit(onSubmit)}>
              <input id='question3' name='question3' ref={register} className='p-2 focus:outline-none bg-gray w-7/12' type="text" placeholder='Enter your answer...' /><br /> <br />
              <button className='block float-right bg-blue px-4 py-1 font-semibold rounded text-white font-normal'>Finish</button>
           </form>

        </div> 
      </div>
    </>
  )
}

export default Step3;