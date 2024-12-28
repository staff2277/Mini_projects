import GridText from "../../components/GridText";
import { useEffect, useState } from "react";
import Categories from "../../components/Categories";

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
    <div className="relative">
      <div className="h-screen grid sm:grid-cols-1 grid-rows-[70%_auto] ]">
        <div className="border-2 border-green-600 content-center justify-items-center">
          <div className="max-sm:w-[15rem] sm:w-[20rem] max-5s:w-[10rem] sm:mt-[7rem]">
            <img src="/images/play.svg" alt="" />
          </div>
          {/* <MovieCards /> */}
        </div>
        <div className="border-2 border-blue-600 content-start justify-items-start">
          <GridText />
        </div>
      </div>
      <div className="bg-double-gradient overflow-hidden absolute z-[-20] h-[75vh] w-full inset-0 gap-2 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]
      
      ">
        {<div className="absolute h-screen w-full bg-transparent-gradient z-10"></div>}
        {poster && poster.map((value, index) => <div className="rounded-2xl" key={index}><img src={value} alt="grid" /></div>)}
      </div>
      <Categories />
    </div>
  );
};

export default Home;
