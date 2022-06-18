import React from 'react';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {StackedCarousel} from "react-stacked-carousel";
import 'react-stacked-carousel/dist/index.css';
import { ShopContext } from '../../contexts/ShopContext';
import PersonFormContainer from '../../components/PersonFormContainer';
import H2 from '../../components/typography/H2';


function PersonalInfo() {
  const {shopData, setShopData} = useContext(ShopContext);
  const navigate = useNavigate();
  const amountOfVIP = shopData.tickets[1].amount;
  const amountOfRegular = shopData.tickets[0].amount;
  let personForms = createPersonForms();
  const previousBtnRef = React.createRef();
  const nextBtnRef = React.createRef();
  
  useEffect(() => {
    setShopData((oldData) => {
        let newData = {...oldData};
        newData.activeStep = 3;
        return newData;
    });
  }, [setShopData])

  function submitAll(){
    navigate("../basket")
  }

  function saveForm(personInfo){
    let data = shopData.persons.find((inData) => inData.id === personInfo.id);
    let isNew = data === undefined;
    if (isNew){
      setShopData((old) => {
        let newData = {...old};
        newData.persons = [...newData.persons, personInfo];
        return newData;
      })
    } else {
      setShopData((old) => {
        let newData = {...old};
        newData.persons = newData.persons.map((inArray) => {
          if(inArray.id === personInfo.id){
            return personInfo;
          }

          return inArray;
        })
        return newData;
      })
    }
  }

  function next(){
    nextBtnRef.current.click();
  }

  function previous(){
    previousBtnRef.current.click();
  }

  function createPersonForms(){
    let result = [];
    if(amountOfVIP + amountOfRegular === 1){
      result.push(
        <div key={1} className='w-full lg:w-3/4'>
          <PersonFormContainer 
              id={1}
              first={true} 
              last={true} 
              type={amountOfVIP === 1? "VIP" : "Regular"}
              title={`Ticket 1/1`} 
              next={next} 
              previous={previous}
              saveForm={saveForm}
              default={shopData.persons.find((person) => person.id === 1)}
              submitAll={submitAll}></PersonFormContainer>
        </div>
      )
    } else {
      for(let i = 1; i <= amountOfVIP; i++){
        result.push(
          <div key={i} className='w-full lg:w-3/4'>
            <PersonFormContainer 
              id={i}
              first={i === 1} 
              last={i === amountOfVIP + amountOfRegular} 
              type="VIP"
              title={`Ticket ${i}/${amountOfRegular + amountOfVIP} (VIP)`} 
              next={next} 
              previous={previous}
              saveForm={saveForm}
              default={shopData.persons.find((person) => person.id === i)}
              submitAll={submitAll}></PersonFormContainer>
          </div>
        )
      }
  
      for(let i = amountOfVIP + 1; i <= amountOfVIP + amountOfRegular; i++){
        result.push(
          <div key={i} className='w-full lg:w-3/4'>
            <PersonFormContainer 
              id={i}
              first={i === 1} 
              last={i === amountOfVIP + amountOfRegular} 
              type="Regular"
              title={`Ticket ${i}/${amountOfRegular + amountOfVIP} (Regular)`} 
              next={next} 
              previous={previous}
              saveForm={saveForm}
              default={shopData.persons.find((person) => person.id === i)}
              submitAll={submitAll}></PersonFormContainer>
          </div>
        )
      }
    }

    return result;
  }

  return (
    <>
    <H2>Step 4:</H2>
    <H2 classModifiers="mb-10">Please enter your personal information</H2>
      <div className='h-screen flex flex-col items-center'>

        <div className='w-full lg:w-3/5'>
          {
            amountOfVIP + amountOfRegular === 1
            ?
            <div>
                {personForms}
              </div>
            :
            <StackedCarousel
            autoRotate={false}
            containerClassName="w-full h-full"
            cardClassName="flex flex-row justify-center w-full"
            leftButton={<div ref={previousBtnRef}></div>}
            rightButton={<div ref={nextBtnRef}></div>}>              
                {personForms}
              </StackedCarousel>  
          }
          
        </div>      
      </div>
    </>
  )
}

export default PersonalInfo