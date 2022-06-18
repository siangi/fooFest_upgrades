import React from 'react';
import ProgressStepsBar from '../components/progressBar/ProgressStepsBar';
import { Outlet } from 'react-router-dom';
import { ShopProvider } from "../contexts/ShopContext";

function Shop() {
  const IconBasePath = process.env.PUBLIC_URL + "/icons/";
  const Steps = [
    {
      label: "Tickets",
      iconPath: `${IconBasePath}/VIP.svg`,
      url: "/shop/tickets",
    },
    {
      label: "Tents",
      iconPath: `${IconBasePath}/tent.svg`,
      url: "/shop/tents",
    },
    {
      label: "Campground",
      iconPath: `${IconBasePath}/campfire.svg`,
      url: "/shop/campground",
    },
    {
      label: "Personal Info",
      iconPath: `${IconBasePath}/form.svg`,
      url: "/shop/personal-info",
    },
    {
      label: "Payment",
      iconPath: `${IconBasePath}/money.svg`,
      url: "/shop/basket",
    },
  ];

  return (
    <div className='bg-darkmode_black h-fit flex flex-col gap-2'>
      <ShopProvider>
        <ProgressStepsBar steps={Steps}></ProgressStepsBar>
        <Outlet />
      </ShopProvider>
    </div>
  )
}

export default Shop