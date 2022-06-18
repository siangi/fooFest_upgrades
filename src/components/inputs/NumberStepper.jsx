import React from 'react';
import { useState, useEffect } from 'react';

function NumberStepper(props) {
    const [internalAmount, setInternalAmount] = useState(props.initialVal);
    
    useEffect(() => {
      props.updateAmount(internalAmount)
    }, [internalAmount, props])
    
    function increase(){
        setInternalAmount((oldVal) => oldVal + 1);
    }

    function decrease(){
        if(internalAmount > 0){
            setInternalAmount((oldVal) => oldVal - 1)
        }        
    }
    function handleManualChange(event){
        if (event.target.value !== ""){
            setInternalAmount(parseInt(event.target.value));
        } else {
            setInternalAmount(0);
        }

        props.updateAmount(internalAmount);
    }
    return (
        <div className={`flex flex-row ${props.small? "": "text-xl"} font-bold text-center`}>
            <button onClick={decrease} type="button">-</button>
            <input type="text" name={props.name} value={internalAmount} inputMode="numeric" onChange={handleManualChange}
                className={`w-8 bg-inherit font-bodyfont ${props.small? "": "text-xl"} font-bold text-center border-none p-0`}
            />
            <button onClick={increase} type="button">+</button>
        </div>
    )
}

export default NumberStepper