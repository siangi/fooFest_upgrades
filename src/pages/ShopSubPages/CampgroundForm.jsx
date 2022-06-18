import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ShopContext } from '../../contexts/ShopContext';
import CampgroundsMap from '../../components/selectionMap/CampgroundsMap';
import CheckboxCard from "../../components/optionCards/CheckboxCard";
import PrimaryButton from '../../components/buttons/PrimaryButton';
import ErrorP from '../../components/typography/ErrorP';
import P from "../../components/typography/P";
import H4 from "../../components/typography/H4";
import H2 from "../../components/typography/H2";
import axios from 'axios';

function CampgroundForm() {
    const navigate = useNavigate();
    const { shopData, setShopData} = useContext(ShopContext);
    const [Campgrounds, setCampgrounds] = useState([
        {
            area: "Helheim",
            spots: "loading...",
            available: "loading..",
        },
        {
            area: "Svartheim",
            spots: "loading...",
            available: "loading.."
        },
        {
            area: "Alfheim",
            spots: "loading...",
            available: "loading.."
        },
        {
            area: "Nilfheim",
            spots: "loading...",
            available: "loading.."
        },
        {
            area: "Muspelheim",
            spots: "loading...",
            available: "loading.."
        }
    ]);
    const [activeCampground, setactiveCampground] = useState(null);
    const [formValid, setFormValid] = useState(true);
    const [checkOnChange, setcheckOnChange] = useState(false);

    useEffect(() => {
        console.log(shopData.greenCamping);
        axios.get("https://cphrt.herokuapp.com/available-spots")
            .then((response) => setCampgrounds(response.data));
    });

    useEffect(() => {
        setShopData((oldData) => {
            let newData = {...oldData};
            newData.activeStep = 2;
            return newData;
        });
    }, [setShopData])
    
    function amountOfTickets(){
        return shopData.tickets.reduce((prev, cur) => prev + cur.amount, 0);
    }

    function displayFreeSpaces(NewCampgroundName){
        let newCampground = Campgrounds.find((campground) => {
            return campground.area === NewCampgroundName
        })

        setactiveCampground(newCampground);
    }

    function handleMapClick(campgroundName, event){
        displayFreeSpaces(campgroundName);
        if(checkOnChange){
            validate();
        }
    }

    function validate(){
        let isValid = activeCampground !== null && activeCampground.available > amountOfTickets();

        setFormValid(isValid);
        return isValid
    }

    function submit(event){
        event.preventDefault();
        setcheckOnChange(true);
        if(validate()){
            setShopData((oldData) => {
                let newData = {...oldData};
                newData.campground = activeCampground;
                return newData;
            });
            navigate("../personal-info")
        } 

    }

    function setCampsGreenly(value){
        setShopData((oldData) => {
            let newData = {...oldData};
            newData.greenCamping.selected = value;
            return newData;
        })
    }
  return (
      <>
    <H2>Step 3:</H2>
    <H2 classModifiers="mb-10">Choose your campground</H2>
    <form className='grid grid-col-1 md:grid-col-2 gap-4'>
        <div className='col-start-1 md:max-h-96 w-full flex flex-col md:flex-row gap-4 bg-darkmode_black2 p-8'>
            <CampgroundsMap value={activeCampground?.area} clickFunc={handleMapClick}></CampgroundsMap>
            <div className='text-shade_darker_white md:w-1/3 break-words'>
                <H4>Choose your campground</H4>
                {activeCampground?
                    <>
                        <P classModifiers="font-bold mt-5">Avaliable spaces at {activeCampground.area}: <span className='font-medium text-accent_yellow'>{activeCampground.available}</span></P> 
                    </>: null
                }
                
                
            </div>    
        </div>
        <div className='col-start-1 md:col-start-2'>
            <CheckboxCard {...shopData.greenCamping} price={shopData.greenCamping.price + " Kr."} value={shopData.greenCamping.selected} setValue={setCampsGreenly}></CheckboxCard>
        </div>
        <div className='col-start-1 md:col-start-2 md:row-start-2 w-full flex flex-row justify-end'>
            {formValid? null : <ErrorP>Please select a Campground with enough free spaces</ErrorP>}
            <PrimaryButton caption="Confirm" action={submit}></PrimaryButton>
        </div>       
    </form>
    </>
  )
}

export default CampgroundForm