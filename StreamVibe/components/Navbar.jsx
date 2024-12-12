import { Button, IconButton } from "@mui/material";
import React  from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [windowResize, setWindowResize] = useState(window.innerWidth)
  
  useEffect(()=>{
    function handleResize (){
    setWindowResize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return ()=>{
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  console.log(windowResize)
  return (
    <div className="bg-transparent py-5 absolute w-full z-20">
      <nav className="flex justify-between items-center sm:mx-16 max-sm:mx-3 md:mx-28">
        <div className="flex">
          <img src="/images/logo.svg" alt="logo" className="w-11 max-sm:w-8" />
          <img src="/images/StreamVibe.svg" alt="logotext" className="w-24 max-sm:w-[4.5rem]" />
        </div>
         {windowResize > 1078 && (<><div className="text-white flex gap-2 bg-[#111111] p-2 rounded-lg border-2 border-[#2c2c2c]">
          <Button className="text-white normal-case hover:bg-[#252525] active:bg-[#252525] focus:bg-[#252525] focus:outline-none focus:ring focus:ring-[#444444e7] py-2 px-4 text-[0.83rem] rounded-md">
            Home
          </Button>
          <Button className="text-white normal-case hover:bg-[#252525] active:bg-[#252525] focus:bg-[#252525] focus:outline-none focus:ring focus:ring-[#444444e7] py-2 px-4 text-[0.83rem] rounded-md">
            Movies & Shows
          </Button>
          <Button className="text-white normal-case hover:bg-[#252525] active:bg-[#252525] focus:bg-[#252525] focus:outline-none focus:ring focus:ring-[#444444e7] py-2 px-4 text-[0.83rem] rounded-md">
            Support
          </Button>
          <Button className="text-white normal-case hover:bg-[#252525] active:bg-[#252525] focus:bg-[#252525] focus:outline-none focus:ring focus:ring-[#444444e7] py-2 px-4 text-[0.83rem] rounded-md">
            Subscriptions
          </Button>
        </div>
        <div className="flex gap-7">
          <IconButton className="text-white normal-case hover:bg-[#252525] active:bg-[#252525] focus:bg-[#252525] focus:outline-none focus:ring focus:ring-[#444444e7] py-4 px-4 text-[0.83rem] rounded-md">
            <img src="/images/search.svg" alt="search" className="w-5" />
          </IconButton>
          <IconButton className="text-white normal-case hover:bg-[#252525] active:bg-[#252525] focus:bg-[#252525] focus:outline-none focus:ring focus:ring-[#444444e7] py-4 px-4 text-[0.83rem] rounded-md">
            <img
              src="/images/notification.svg"
              alt="notification"
              className="w-5"
            />
          </IconButton>
        </div></>)}
        {windowResize < 1078 && <IconButton className="text-white normal-case hover:bg-[#252525] active:bg-[#252525] focus:bg-[#252525] focus:outline-none focus:ring focus:ring-[#444444e7] py-4 px-4 text-[0.83rem] rounded-md">
          <img src="/images/menu.svg" alt="menu-icon" />
        </IconButton>}
      </nav>
    </div>
  );
};

export default Navbar;
