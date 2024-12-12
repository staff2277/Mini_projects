import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between mx-10 mt-6 items-center p-1 text-[0.8rem] font-semibold'>
            <div className='flex'>
                <img src="/images/logo.svg" alt="logo" className='' />
                <img src="/images/ike.svg" alt="logo"  className=''/>
            </div>
            <ul className='flex gap-14 items-center'>
                <li className=' px-6 py-2 rounded-2xl bg-gradient-to-r from-cyan-700 to-sky-600 text-black'>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>How it Works</li>
                <li>Help</li>
                <li>Hire Bike</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar