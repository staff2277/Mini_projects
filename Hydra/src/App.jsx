import { useState } from "react";
import "./App.css";
import Navbar from "../components/Navbar";
import RoundedImage from "../components/RoundedImage";
import HeroText from "../components/HeroText";

function App() {
  return (
    <div className="5s:px-5 lg:px-[4rem]">
    <Navbar />
      <div className="sm:flex sm:justify-between sm:flex-row 5s:flex 5s:flex-col-reverse gap-4 justify-center border-2 items-center ">
        <HeroText />
        <RoundedImage />
      </div>
    </div>
  );
}

export default App;
