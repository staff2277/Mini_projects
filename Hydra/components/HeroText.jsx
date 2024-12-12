import React, { useState, useEffect } from "react";

const HeroText = () => {
  const [text, setText] = useState(window.innerWidth)

  useEffect(() => {
    const resize = () => {
      setText(window.innerWidth);
    };
  
    
    setText(window.innerWidth);
  
    window.addEventListener("resize", resize);
  
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [])

  const renderText = text > 640;

  return (
    <div>
        <div className="border-2">
        <div className="z-20 5s:flex 5s:flex-col 5s:items-center sm:items-start">
          <img
            src="/images/gradient-text1.svg"
            alt="Text"
            className="w-[25rem] lg:w-[25rem] md:w-[20rem] sm:w-[18rem] 5s:w-[20rem] 5s:mt-12 z-20 mb-4"
          />
          <img
            src="/images/gradient-text2.svg"
            alt="Text"
            className="w-[25rem] lg:w-[25rem] md:w-[20rem] sm:w-[18rem] 5s:w-[18rem] z-20 mb-5"
          />
        </div>
      </div>
      {renderText && (<div className='border-2 5s:flex 5s:justify-center sm: justify-start'>
        <p className='sm:text-[0.6rem] font-bold gap-2 text-[#FFFFFF] md:text-[0.7rem] lg:text-[0.8rem] border-2 w-[70%] 5s:w-[100%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui architecto eveniet.</p>
      </div>)}
      <div className="mt-5 border-2 5s:flex 5s:justify-center sm:justify-start">
      <button className="z-10 rounded-3xl 5s:text-[0.7rem] font-bold text-[#201e29] py-[15px] px-[3.5rem]  bg-gradient-to-r from-[#8176AF] via-[#8176AF] to-[#b6abe4]">BUILD YOUR WORLD</button>
      </div>
    </div>
  )
}

export default HeroText