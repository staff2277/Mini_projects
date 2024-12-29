import GridText from "../../components/GridText";
import Categories from "../../components/Categories";
import data from "../../components/data"

const Home = () => {
  

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
        {data.map((value) => <div className="rounded-2xl" key={value.key}><img src={value.image} alt="grid" /></div>)}
      </div>
      <Categories />
    </div>
  );
};

export default Home;
