import React from "react";

const Trending = ({ moviesData }) => {
  return (
    <>
      <h1 className="5s:text-[2rem] sm:text-[2.5rem] max-5s:text-[1rem] font-bold ml-5">
        Trending Now
      </h1>
      <div className="flex mt-[4rem] overflow-x-hidden snap-mandatory snap-x snap-item gap-5 ">
        {moviesData.map((value, index) => (
          <div key={index} className=" p-[20px] bg-[#1A1A1A] rounded-xl">
            <div className="w-[300px]">
              <img
                src={`https://image.tmdb.org/t/p/w342${value.poster_path}`}
                alt="trending Image"
                className="rounded-xl"
              />
            </div>
            <div>
              <div>
                <p className="font-extrabold mt-5">{value.title}</p>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className=" max-5s:text-[0.8rem] text-[#999999]">{`Released ${value.release_date}`}</span>
                <span className="flex items-center gap-3">
                  <img className="w-[30px]" src="/star.svg" alt="" />
                  <span className="text-[#E50000] max-5s:text-[0.8rem]">
                    {value.vote_average}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trending;
