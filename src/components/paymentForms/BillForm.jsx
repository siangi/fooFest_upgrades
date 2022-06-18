import React, { useState, useContext } from 'react';
import PersonForm from '../PersonForm';
import Select from '../inputs/Select';
import { ShopContext } from '../../contexts/ShopContext';

function BillForm(props) {
  const {shopData} = useContext(ShopContext);
  const [preset, setPreset] = useState({id: 0, firstname: "", lastname: "", address: "", zip: "", city: "", email: "", phone: ""});
  const persons = shopData.persons;
  

  function getSelectOptionsFromPersons(){
    let options = persons.map((person) => {return { value: person.id, caption: `${person.firstname} ${person.lastname}` }})
    options.unshift({value: 0, caption: "Enter custom information"});
    return options
  }
  
  function onSelectionChange(event){
    if (event.target.value === "0"){
      setPreset({id: 0, firstname: "", lastname: "", address: "", zip: "", city: "", email: "", phone: ""});
    } else {
      setPreset(persons.find((person) => person.id.toString() === event.target.value));
    }
  }
  return (
    <div>
      <Select options={getSelectOptionsFromPersons()} 
        name="person-preset" id="person-preset" 
        errormessage="please select a person or the default"
        label="Use billing information from one of the tickets:"
        onChange={onSelectionChange}>
      </Select>
      <PersonForm
        key={preset.id}
        billing={true}
        default={preset}
        submitAll={() => {props.onSubmit();}}
        saveForm={() => {}}
      ></PersonForm>
    </div>
  )
}

export default BillForm