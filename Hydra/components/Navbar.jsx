import React, { useState, useEffect } from "react";

function Navbar() {
  const [viewport, setViewport] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewport(window.innerWidth);
    };
  
    
    setViewport(window.innerWidth);
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])

  const renderHamburgerMenu = viewport < 800;
  const renderMenu = viewport > 800;
  return (
    <nav className="flex items-center justify-between text-white my-[2.3rem]  text-[0.6rem] font-bold">
      <div className="flex items-center gap-3">
        <img src="/images/logo.svg" alt="logo" className="w-[6.3rem] lg:w-[6.3rem] md:w-[5rem] sm:w-[6.3rem] 5s:w-[5.5rem]" />
        <img src="/images/hydra.svg" alt="hydra-svg-file" className="w-[4rem] lg:w-[3.5rem] md:w-[3rem] sm:w-[3rem] 5s:w-[2.8rem]" />
      </div>

      {renderMenu && (<ul className="uppercase flex gap-3 items-center">
        <li>About</li>
        <li>Services</li>
        <li>Technologies</li>
        <li>How To</li>
      </ul>)}

      {renderMenu && (<div className="flex gap-3 items-center ">
        <button className="border-[2px] px-[1.8125rem] py-[0.6875rem] rounded-3xl">CONTACT US</button>
        <button className="px-[1.8125rem] py-[0.6875rem] rounded-3xl bg-gradient-to-r from-[#8176AF] via-[#8176AF] to-[#b6abe4] text-[#000000c9]">JOIN HYDRA</button>
      </div>)}

      {renderHamburgerMenu && (<div className="flex items-center">
        <img
          src="/images/Hamburger-Button.svg"
          alt="hamburger-menu"
          className=""
        />
      </div>)}
    </nav>
  );
}

export default Navbar;
