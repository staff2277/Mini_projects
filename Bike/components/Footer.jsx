import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between flex-1 my-5 ">
      <div className="flex bg-[#2b4142] flex-auto w-[70%] items-center justify-around ml-12 mr-24 rounded-[4rem]">
        <div className="flex flex-col ">
          <p className="text-[1.8rem] mt-4 font-semibold ">750 W</p>
          <p className="mb-5 mt-3 text-center font-semibold text-[0.83rem]">Motor</p>
        </div>

        <div className="flex flex-col">
          <p className="text-[1.8rem] mt-4 font-semibold ">3 Hours</p>
          <p className="mb-5 mt-3 text-center font-semibold text-[0.83rem]">Charging Time</p>
        </div>

        <div className="flex flex-col">
          <p className="text-[1.8rem] mt-4 font-semibold ">25mph</p>
          <p className="mb-5 mt-3 text-center font-semibold text-[0.83rem]">Per Hour</p>
        </div>

        <div className="flex flex-col">
          <p className="text-[1.8rem] mt-4 font-semibold ">48V</p>
          <p className="mb-5 mt-3 text-center font-semibold text-[0.83rem]">Battery</p>
        </div>
      </div>

      <div className="flex flex-none w-[30%] justify-center items-center gap-6 mr-[3rem]">
        <div>
          <img src="/images/facebook.svg" alt="facebook " />
        </div>
        <div>
          <img src="/images/instagram.svg" alt="Instagram " />
        </div>
        <div>
          <img src="/images/linkedin.svg" alt="linkedin " />
        </div>
        <div>
          <img src="/images/x.svg" alt="x " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
