import Navbar from "../../components/Navbar";
import GridText from "../../components/GridText";
import MovieCards from "../../components/MovieCards";

const Home = () => {
  return (
    <div className="relative border-2 sm:px-[50px] sm:py-[20px] max-sm:px-[20px] max-sm:py-[15px] ">
      <div className="h-screen grid grid-cols-1 grid-rows-[13%_auto_35%]">
        <div className="border-2 border-red-600 content-center  ">
          <Navbar />
        </div>
        <div className="border-2 border-green-600 content-center justify-items-center">
          <div className="max-sm:w-[15rem] sm:w-[20rem]"><img src="/images/play.svg" alt="" /></div>
          {/* <MovieCards /> */}
        </div>
        <div className="border-2 border-blue-600">
          <GridText />
        </div>
      </div>
    </div>
  );
};

export default Home;
