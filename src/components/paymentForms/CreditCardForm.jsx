import React from 'react'
import PayNowButton from '../buttons/PayNowButton'
import BaseInput from '../inputs/BaseInput'

function CreditCardForm(props) {
  const form = React.createRef();
  
  function handleSubmit(event){
    event.preventDefault(); 
    if(form.current.reportValidity()){
      props.onSubmit();
    }
  }
  return (
    <form ref={form}>
      <BaseInput name="holder-name"
        id="holder-name"
        required={true}
        label="Cardholder"
        errormessage="enter the name of the card owner">
      </BaseInput>
      <BaseInput name="card-number" 
        id="card-number" 
        required={true} 
        label="Card Number"
        pattern="^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$" // yes this is not a good regex for a credit card number. 
        // doesn't matter that much, there is no money involved anyway
        errormessage="enter a valid (17 digit) card number">
      </BaseInput>
      <div className='flex flex-row gap-4'>
        <BaseInput name="expiry-date"
          id="expiry-date"
          required={true}
          label="Expiration Date (MM/YY)"
          pattern="^((0[1-9])|(1[0-2]))[\/\.\-]*(([2-9][1-9]))$"
          errormessage="enter a valid expiration date">
        </BaseInput>
        <BaseInput name="security-code"
          id="security-code"
          required={true}
          label="Security Code"
          pattern="^\d{3}$"
          errormessage="enter a valid security code">
        </BaseInput>
      </div>
      <PayNowButton action={handleSubmit}></PayNowButton>
    </form>
  )
}

export default CreditCardForm