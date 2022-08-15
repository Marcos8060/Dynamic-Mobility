import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../redux/features/data';
import { useSelector } from 'react-redux/es/exports';
import  chooseQuestion2 from '../redux/features/Questions';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

const Step2 = () => {
  const dispatch  = useDispatch();
  const history = useNavigate();

  const data = useSelector((store) => store.data.data)

  const question2 = useSelector((store) => store.question1)

  const { register,handleSubmit } = useForm({ defaultValues: { question2}})

  console.log('hello',data);


  useEffect(() =>{
    dispatch(getData())
  },[])

  const onSubmit =(info)=>{
    dispatch(chooseQuestion2(data.question2))
    history('/step3')
  }

  return (
    <>
      <div className='bg-gray h-100v py-20'>
        <div className="bg-white shadow-2xl rounded p-4 md:w-8/12 w-11/12 mx-auto p-10">
          <h2 className='font-semibold mb-20'>{data.strings.en.q_farmer_gender}</h2>

           <form onSubmit={handleSubmit(onSubmit)}>
              <select name="question2" id="question2" ref={register}>
                <option value='male'>{data.strings.en.opt_male}</option>
                <option value='female'>{data.strings.en.opt_female}</option>
                <option value='other'>{data.strings.en.opt_other}</option>
              </select>
              <button className='block float-right bg-blue px-4 py-1 font-semibold rounded text-white font-normal'>Next</button>
           </form>

        </div> 
      </div>
    </>
  )
}

export default Step2;