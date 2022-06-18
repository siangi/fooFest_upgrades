import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import RadioButton from '../inputs/RadioButton';
import CreditCardForm from './CreditCardForm';
import MobilePayForm from './MobilePayForm';
import BillForm from './BillForm';

function PaymentContainer(props) {
  const [activePayOption, setActivePayOption] = useState("mobile-pay");
  const navigate = useNavigate();

  async function onSubmit(){
    let confirmed = await props.confirmReservation()
    if(confirmed){
      navigate("/confirmation");
    } else {
      console.log("not fulfilled in function");
    }
  }
  return (
    <div className='h-full'>
        <div className='flex flex-row w-full gap-1 md:gap-3 text-shade_darker_white md:mb-6 mt-10'>
            <RadioButton groupName="pay-options" id="credit-card" label="credit card" checked={activePayOption==="credit-card"} onChange={() => setActivePayOption("credit-card")}></RadioButton>
            <RadioButton groupName="pay-options" id="mobile-pay" label="mobile pay" checked={activePayOption==="mobile-pay"} onChange={() => setActivePayOption("mobile-pay")}></RadioButton>
            <RadioButton groupName="pay-options" id="bill" label="bill" checked={activePayOption==="bill"} onChange={() => setActivePayOption("bill")}></RadioButton>  
        </div>
        <div className='border border-accent_yellow p-8'>
          {activePayOption === "bill" && <BillForm onSubmit={onSubmit}></BillForm>}
          {activePayOption === "credit-card" && <CreditCardForm onSubmit={onSubmit}></CreditCardForm>}
          {activePayOption === "mobile-pay" && <MobilePayForm onSubmit={onSubmit}></MobilePayForm>}
        </div>
    </div>
  )
}

export default PaymentContainer