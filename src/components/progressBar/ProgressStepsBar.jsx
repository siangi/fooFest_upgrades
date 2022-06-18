import React from 'react';
import { useContext } from 'react';
import StepIndicator from "./StepIndicator";
import { ShopContext } from '../../contexts/ShopContext';

function ProgressStepsBar(props) {
    const {shopData} = useContext(ShopContext);
  return (
    <div className='w-full h-16 flex justify-between items-center mb-10'>
        {
            props.steps.map((step, index) => {
                if(index < props.steps.length - 1){
                    return (
                        <>
                            <StepIndicator key={index} {...step} active={shopData.activeStep === index}></StepIndicator>
                            {/* do this with a :after for list key problems */}
                            <div key={Math.random()} className='h-0 border-2 border-darkmode_black6 flex-auto'></div>
                        </>)
                } else {
                    return (<StepIndicator key={index} {...step} active={shopData.activeStep === index}></StepIndicator>)
                }
            })
        }
    </div>
  )
}

export default ProgressStepsBar