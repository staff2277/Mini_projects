 import React from "react"

 function Navbar () {
    return(
        <nav className="navContainer bg-[#1876f2] flex justify-between items-center p-1">
            <div className="leftNavbar flex gap-10 ml-7">
                <div className="logoContainer">
                    <a href="#"><img src="/images/logo.png" alt="logo" className="w-56" /></a>
                </div>
                <ul className="leftNavlinks flex items-center gap-5 ">
                    <li className="notification ">
                        <a href="#"><img src="/images/notification.png" alt="notificatin-icon" className="h-8"/></a>
                    </li>
                    <li className="message"><a href="#">
                     <img src="/images/inbox.png" alt="inbox-icon" className="h-8" />
                        </a></li>
                    <li className="video">
                        <a href="#"><img src="/images/video.png" alt="video-icon" className="h-8"/></a>
                    </li>
                </ul>
            </div>
            <div className="rightNavbar flex items-center gap-6 w-auto mr-7">
                <div className="searchBarContainer flex items-center bg-white rounded-3xl hover:cursor-pointer p-1">
                    <button className="#"><img src="/images/search.png" alt=""  className="p-2  text-lg hover:bg-gray-300 rounded-3xl mr-1 w-10" /></button>
                    <input type="text" placeholder="Search" className="searchBar w-72 py-2 rounded-3xl outline-none" />
                </div>
                <div className="profileContainer flex items-center relative">
                    <img src="/images/profile-pic.png" alt="profile-pic" className="w-12 rounded-full" />
                    <span className="online h-3  w-3 border-2 rounded-full bg-green-500 text-green-500 text-lg absolute top-0 right-0">.</span>
                </div>
                
            </div>
        </nav>
    ) 
}

export default Navbar