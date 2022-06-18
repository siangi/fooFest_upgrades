import React from 'react'
import { createContext } from "react";
import { useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const baseIconPath = process.env.PUBLIC_URL + "/icons/";
    const baseImagePath = process.env.PUBLIC_URL + "/images/";
    const [shopData, setShopData] = useState({
        tickets: [{
            id: 0,
            title:"Regular",
            price:799,
            description:"Access to the 3 stages, 5 campgrounds, 13 bars, 15 food stands and our renessaince fair all in one! Experience as much party as possible during our 7 day festival! This tickets gets you the best value for your stay at RAGNAROCK festival. Camping and hygiene facilites are included.",
            imagePath: baseIconPath + "RegularTicketGold.svg",
            amount: 0,
          },{
            id: 1,
            title:"VIP",
            price:1299,
            description:"Do you want to see behind the scenes and experience RAGNAROCK to the fullest? Then this ticket is for you! You have all the access a regular ticket gives you, plus access to a backstage bar and raised plattform in front of every stage, for even better views. You also get a personal locker inside the festival area, so you don't have to worry about your valuables while in the moshpit.",
            imagePath: baseIconPath + "VIPGold.svg",
            amount: 0,
          }],
        tents: [
            {
                id: 0,
                title:"3 Person Tent",
                price:399,
                description:"You can leave all your tent related worries at home, as long as you book this spacious three person tent. It will be completely set up and ready as soon as you arrive. Marked and reserved und your name.",
                imagePath: baseImagePath + "3PersonTent.jpg",
                spaceForPeople: 3,
                amountOfTents: 0,
            },
            {
                id: 1,
                title:"2 Person Tent",
                price:299,
                description:"This tent comfortably fits two people and their luggage, so you can skip the annoying set-up and get to partying immediatly. It will be completely set up and ready as soon as you arrive. Marked and reserved und your name.",
                imagePath: baseImagePath + "2PersonTent.jpg",
                spaceForPeople: 2,
                amountOfTents: 0,
            }
        ],
        campground: "",
        greenCamping: {
            title: "Green Camping",
            price:249,
            selected: false,
            description: "The climate crisis is no joke and a big festival like this puts a lot of strain on the ground it's standing on. That's why we give you the option to compensate any damages to the environment you cause while camping. The money will go to maintaing water treatment facilities in the area and restoring plant life on the festival grounds",
            labelText: "add green Camping",
            imagePath: process.env.PUBLIC_URL + "/icons/leaf.svg"
        },
        bookingFee: {
            title: "Booking Fee",
            price:99,
            description: "Lorem Ipsum dolor Sit amet",
        },
        persons: [],
        activeStep: 0
    });
    const value = {
        shopData,
        setShopData
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
