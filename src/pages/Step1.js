import React,{useState} from 'react'

const Step1 = ({ nextStep,handleFormData,values}) => {

  const [error, setError] = useState(false);

  const submitFormData = (e) =>{
    e.preventDefault();

    if(values.question1 === ''){
      setError(true);
    }else{
      nextStep()
    }

  }

  return (
    <>
     <div className="bg-white shadow-2xl rounded p-4 md:w-8/12 w-11/12 mx-auto p-10 mt-20">

      <h2 className='font-semibold mb-20'>What is the name of the farmer?</h2>
      <form onSubmit={submitFormData}>

        <input id='question1' name='question1' defaultValue={values.question1} onChange={handleFormData("question1")} className='p-2 focus:outline-none bg-gray w-7/12' type="text" placeholder='Enter your name...' />
        {
          error ? (
            <p className='text-sm text-red font-press-start'>This is a required field!</p>
          ):(
            ''
          )
        }
        <br /><br />
        <button className='block float-right bg-blue px-4 py-1 font-semibold rounded text-white font-normal'>Next</button>

      </form>

    </div> 
    </>
  )
}

export default Step1;