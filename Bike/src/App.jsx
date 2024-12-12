import { useState } from "react";
import "./App.css";
import Navbar from "../components/Navbar";
import HeroLeft from "../components/HeroLeft";
import HeroRight from "../components/HeroRight";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex ">
        <HeroLeft />
        <HeroRight />
      </div>
      <Footer />
    </>
  );
}

export default App;
