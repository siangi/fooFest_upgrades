import React from 'react';
import BaseInput from "./inputs/BaseInput";
import PrimaryButton from './buttons/PrimaryButton';
import PayNowButton from './buttons/PayNowButton';
import SecondaryButton from './buttons/SecondaryButton';

function PersonForm(props) {
  const form = React.createRef();
  function previous(event){
    event.preventDefault();
    props.previous();    
  }
  function next(event){
    event.preventDefault();
    if(form.current.reportValidity()){
      props.saveForm(createObjectFromForm());
      props.next();
    }    
  }

  function submit(event){
    event.preventDefault();
    if(form.current.reportValidity()){
      props.saveForm(createObjectFromForm());
      props.submitAll();
    }
  }

  function createObjectFromForm(){
    return {
      id: props.id,
      type: props.type,
      firstname: form.current.elements["firstname"].value,
      lastname: form.current.elements["lastname"].value,
      address: form.current.elements["address"].value,
      zip: form.current.elements["zip"].value,
      city: form.current.elements["city"].value,
      email: form.current.elements["email"].value,
      phone: form.current.elements["phone"].value
    }
  }
  return (
      <form ref={form} className='' onSubmit={submit}>
        <BaseInput label="First Name" id="firstname" name="firstname" errormessage="please enter a first name" initialValue={props.default?.firstname} required={true}></BaseInput>
        <BaseInput label="Last Name" id="lastname" name="lastname" errormessage="please enter a last name" initialValue={props.default?.lastname} required={true}></BaseInput>
        <BaseInput label="Address" id="address" name="address" errormessage="please enter address (street and number)" initialValue={props.default?.address} required={true}></BaseInput>
        <div className='flex flex-row gap-3' >
          <BaseInput label="Zip Code" id="zip" name="zip" errormessage="please enter a Zip-Code" initialValue={props.default?.zip} pattern="(\d){1,5}" required={true}></BaseInput>
          <BaseInput label="City" id="city" name="city" errormessage="please enter a City" initialValue={props.default?.city} required={true}></BaseInput>
        </div>
        <BaseInput label="E-Mail" id="email" name="email" type="email" errormessage="please enter a valid e-mail (example@example.com)" initialValue={props.default?.email} required={true}></BaseInput>
        <BaseInput label="Phone" id="phone" name="phone" errormessage="please enter a valid phone number" initialValue={props.default?.phone} pattern="(\+?\d*\s*)*" required={true}></BaseInput>
        {
          props.billing?(
            <div className='flex flex-row justify-start'>
              <PayNowButton action={submit}></PayNowButton>
            </div>
          ):(
            <div className='flex flex-row justify-between'>
              {!props.first && <SecondaryButton caption="previous" action={previous}></SecondaryButton>}
              {!props.last && <PrimaryButton caption="next" action={next}></PrimaryButton>}
              {props.last && <PrimaryButton caption="submit" action={submit}></PrimaryButton>}
            </div>
          )
        }
        
      </form>
  )
}

export default PersonForm