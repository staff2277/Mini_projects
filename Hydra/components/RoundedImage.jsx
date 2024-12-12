import React from "react";

const RoundedImage = () => {
  return (
    <div>
       <div className="border-2">
        <div className=" relative xl:w-[25rem] rounded-tl-[5rem] rounded-tr-[5rem] rounded-br-[5rem] rounded-bl-[14rem]">
          
          <img
          className="z-30 relative xl:w-[25rem] rounded-tl-[5rem] rounded-tr-[5rem] rounded-br-[5rem] rounded-bl-[14rem] border-[0.5rem] border-[#00000033] "
          src="/images/img1.png"
          alt="image"
        />
        
        
        <img
          src="/images/Vector 1.svg"
          alt="vector"
          className="absolute lg:w-[20rem] lg:right-[-2rem] lg:top-[-5.2rem] sm:w-[20rem] sm:right-[-1rem] sm:top-[-5.2rem] 5s:bottom-[-13rem] 5s:left-5 z-[-1]"
        />
        <img
          src="/images/Vector 2.svg"
          alt="vector"
          className="absolute lg:w-[25rem] lg:left-[-1rem] lg:bottom-[-12rem] sm:w-[25rem] sm:left-[-1rem] sm:bottom-[-7rem] 5s:w-[20rem] 5s:left-[-2rem] 5s:bottom-[-10  rem] z-[-1] "
        />
        <img
          src="/images/Vector 3.svg"
          alt="vector"
          className="absolute lg:w-[45rem] lg:left-0 lg:bottom-[-8rem] sm:w-[45rem] sm:left-0 sm:bottom-[-8rem] 5s:w-[45rem] 5s:left-0 5s:bottom-[-8rem]  z-[-1]"
        />
        </div>
        
        
      </div> 
      
      
    </div>
  );
};

export default RoundedImage;
