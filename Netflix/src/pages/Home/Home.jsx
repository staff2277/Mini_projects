import React from 'react'
import "./home.css"
import Navbar from "../../components/Navbar/Navbar"
import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero relative w-full">
        <img src="/images/hero_banner.jpg" alt="banner" className='w-full mask bg-gradient-to-r from-transparent to-black' />
        <div className="hero-caption absolute width-full pl-[6%] bottom-0">
          <img src="/images/hero_title.png" alt="hero-title" className='w-90% w-max-[420px] mb-[30px]'/>
          <p className='w-[700px] text-[17px] mb-[20px]'>Discovering his ties to a secret ancient order a young man living in modern Istanbul embarks on a quest to save the city from an imortal enemy</p>
          <div className="hero_btn flex gap-[10px] mb-[50px]">
            <button className='hover:bg-[#ffffffbf] py-[8px] px-[20px] inline-flex items-center gap-[10px] text-[15px] font-[600] bg-white rounded-[4px] cursor-pointer text-black'><img src="/images/play_icon.png" alt="play_icon" className='w-[25px] '/> Play</button>
            <button className='hover:bg-[#6d6d6e66] py-[8px] px-[20px] inline-flex items-center gap-[10px] text-[15px] font-[600]  rounded-[4px] cursor-pointer bg-[#6d6d6eb3] text-white'><img src="/images/info_icon.png" alt="info_icon" className='w-[25px] '/> More info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
    </div>
  )
}

export default Home