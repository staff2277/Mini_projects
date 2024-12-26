import Navbar from "../../components/Navbar";
import GridText from "../../components/GridText";
import MovieCards from "../../components/MovieCards";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getGrid() {
      const url = "https://movies-api14.p.rapidapi.com/movies";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "f70681134fmsh77ac107ca7b7377p14cd62jsn881aa11f8a61",
          "x-rapidapi-host": "movies-api14.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result)
      } catch (error) {
        console.error(error);
      }
    }
    getGrid();
  }, []);

  let poster = data.movies?.map(value => value.poster_path || [])

  console.log(poster);

  return (
    <div className="relative border-2 sm:px-[50px]  max-sm:px-[20px] ">
      <div className="h-screen grid grid-cols-1 grid-rows-[15%_auto_auto] ]">
        <div className="border-2 border-red-600 content-center  ">
          <Navbar />
        </div>
        <div className="border-2 border-green-600 content-center justify-items-center">
          <div className="max-sm:w-[15rem] sm:w-[20rem] max-5s:w-[10rem]">
            <img src="/images/play.svg" alt="" />
          </div>
          {/* <MovieCards /> */}
        </div>
        <div className="border-2 border-blue-600 content-center justify-items-center">
          <GridText />
        </div>
      </div>
      <div className="bg-double-gradient overflow-hidden absolute z-[-20] h-[75vh] w-full inset-0 gap-2 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]
      
      ">
        {<div className="absolute h-screen w-full bg-transparent-gradient z-10"></div>}
        {poster && poster.map((value, index) => <div className="rounded-2xl" key={index}><img src={value} alt="grid" /></div>)}
      </div>
    </div>
  );
};

export default Home;
