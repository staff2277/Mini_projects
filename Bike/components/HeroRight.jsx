import React from 'react'

const HeroRight = () => {
  return (
    <div className='flex-none w-[30%] flex flex-col justify-center items-start ml-[5rem]'>
        <p className='text-[2.5rem] text-sky-600 font-semibold'>Hubble</p>
        <p className='text-[7rem] mx-[-8px] my-[-16px] font-semibold'>Bike</p>
        <p className='text-[0.84rem] w-[22rem] font-medium'>Hire a bike to any destination and share with friends,
Please use the app to order a bike from any where in Brimingham...</p>
        <div className='w-full'><button className='bg-gradient-to-r from-cyan-700 to-sky-600 text-white font-bold text-[1.2rem] mt-8 py-4 px-[26%] rounded-3xl'>Hire a Bike</button></div>       
    </div>
  )
}

export default HeroRight