import React, { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../redux/features/data';
import { useSelector } from 'react-redux';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Response from './Response';

const Survey = () => {
  const [step,setStep] = useState(1)
  const dispatch  = useDispatch();

  const data = useSelector(store => store.data.data)

    //state for form data
    const [formData, setFormData] = useState({
      question1: "",
      question2: "",
      question3: "",
    })

    useEffect(() =>{
      dispatch(getData()) 
    },[])


  console.log('hello',data);

  // next step
  const nextStep=()=>{
    setStep(step + 1)
  }

  // prevstep
  const prevStep = ()=>{
    setStep(step- 1)
  }

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
      // input value from the form
      const {value } = e.target;


    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));
    }

    switch(step){
      case 1:
        return <Step1 nextStep={nextStep} handleFormData={handleInputData} values={formData}/>
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData}/>
      case 3:
        return <Step3 values={formData} nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData}/> 
      case 4:
        return <Response values={formData}/> 
      default:
        return <Step1 />
    }
}

export default Survey;