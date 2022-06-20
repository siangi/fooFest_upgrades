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
import ShopHelpers from "../../models/ShopHelpers"

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
    const [formValid, setFormValid] = useState(true);
    const [checkOnChange, setcheckOnChange] = useState(false);

    useEffect(() => {
        axios.get("https://cphrt.herokuapp.com/available-spots")
            .then((response) => setCampgrounds(response.data));
    });

    useEffect(() => {
        setShopData((oldData) => {
            let newData = {...oldData};
            newData.progress.activeStep = 2;
            newData.progress.validator = validate;
            return newData;
        });
    }, []);

    function setactiveCampground(newCampground){
        setShopData((oldData) => {
            let newData = {...oldData};
            newData.campground = newCampground;
            return newData;
        })
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
        let isValid = ShopHelpers.validateCampground(shopData);
        setFormValid(isValid);
        return isValid
    }

    function submit(event){
        event.preventDefault();
        setcheckOnChange(true);
        if(validate()){
            navigate("../personal-info")
        } 
        validate();
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
            <CampgroundsMap value={shopData.campground?.area} clickFunc={handleMapClick}></CampgroundsMap>
            <div className='text-shade_darker_white md:w-1/3 break-words'>
                <H4>Choose your campground</H4>
                {shopData.campground?
                    <>
                        <P classModifiers="font-bold mt-5">Avaliable spaces at {shopData.campground.area}: <span className='font-medium text-accent_yellow'>{shopData.campground.available}</span></P> 
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