import { createContext, useState } from "react";
import App from './App'

export const MultiStepContext = createContext();


const Context = () => {
    const [currentStep,setCurrentStep] = useState(1)
  return (
    <MultiStepContext.Provider value={{
        currentStep,
        setCurrentStep
    }}>
        <App />
    </MultiStepContext.Provider>
  )
}

export default Context