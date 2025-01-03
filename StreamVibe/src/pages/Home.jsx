import GridText from "../../components/GridText";
import Categories from "../../components/Categories";
import Devices from "../../components/Devices";
import SubPlan from "../../components/SubPlan";
import data from "../../components/data";

const Home = () => {
  return (
    <div className="relative">
      <div className="h-screen grid sm:grid-cols-1 5s:grid-rows-[65%_auto] max-5s:grid-rows-[70%_auto] ">
        <div className="content-center justify-items-center">
          <div className="max-sm:w-[15rem] sm:w-[20rem] max-5s:w-[10rem] sm:mt-[7rem]">
            <img src="/images/play.svg" alt="" />
          </div>
        </div>
        <div className="content-start justify-items-start">
          <GridText />
        </div>
      </div>
      <div className="bg-double-gradient grid-cols-[repeat(auto-fit,minmax(auto,1fr))] overflow-hidden absolute z-[-20] h-[75vh] w-full inset-0 gap-[0.125rem] grid md:grid-cols-[repeat(auto-fit,minmax(9.375rem,1fr))] max-md:grid-cols-[repeat(auto-fit,minmax(6.25rem,1fr))] max-sm:grid-cols-[repeat(auto-fit,minmax(5.9375rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(12.5rem,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(12.5rem,1fr))]  3xl:grid-cols-[repeat(auto-fit,minmax(20.5rem,1fr))]">
        {
          <div className="absolute h-screen w-full bg-transparent-gradient z-10"></div>
        }
        {data.map((value) => (
          <div className="rounded-2xl" key={value.key}>
            <img src={value.image} alt="grid" />
          </div>
        ))}
      </div>
      <div className="sm:px-[5%] max-sm:px-[15px]">
        <Categories />
        <Devices />
        <SubPlan />
      </div>
    </div>
  );
};

export default Home;
