import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar fixed w-full py-[20px] px-[6%] flex justify-between text-[14px] text-[#e5e5e5] bg-gradient-to-r from-transparent via-black to-transparent z-10">
      <div className="nav-left flex items-center gap-[50px]">
        <img src="/images/logo.png" alt="" className="w-[90px]" />
        <ul className="flex gap-[20px] cursor-pointer">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="nav-right flex gap-[20px] items-center">
        <img
          src="/images/search_icon.svg"
          alt="search-icon"
          className="w-[20px] cursor-pointer"
        />
        <p>Children</p>
        <img
          src="/images/bell_icon.svg"
          alt="notification-icon"
          className="w-[20px] cursor-pointer"
        />  

        <div className="navbar-profile relative flex items-center gap-[10px] cursor-pointer group">
          <img
            src="/images/profile_img.png"
            alt="profile-icon"
            className="w-[35px] cursor-pointer rounded-[4px]"
          />
          <img
            src="/images/caret_icon.svg"
            alt="drop-down-icon"
            className="] cursor-pointer"
          />
          <div className="drop-down absolute top-[100%] right-0 w-max bg-[#191919] py-[18px] px-[22px] rounded-[2px] underline z-10 hidden group-hover:block">
            <p className="text-[13px] cursor-pointer bg-[#191919] ">
              Sign out of netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
