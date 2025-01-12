import { useEffect, useState } from "react";
import Categories from "../../components/Categories";
import Preview from "../../components/Preview";
import Trending from "../../components/Trending";

const MoviesXShows = ({
  moviesData,
  movieGenreName,
  movieGenreData,
  movieTopTen,
}) => {
  const genreImg = movieGenreData.flat().map((value) => value.poster_path);
  const topTen = movieTopTen.flat().map((value) => value.poster_path);
  console.log(moviesData);

  return (
    <div>
      <div>
        <Preview
          moviesData={moviesData}
          movieGenreName={movieGenreName}
          genreImg={genreImg}
        />
      </div>
      <div className="mt-[5rem]  sm:px-[5%] max-sm:px-[15px">
        <div className="border-2 border-[#1F1F1F] relative">
          <div className="inline-block absolute top-[-60px] left-[20px] bg-[#E50000] normal-case hover:bg-[#3a3a3a] focus:bg-[#3f3f3f] active:bg-[#3f3f3f] focus:outline-none focus:ring focus:ring-[#cac8c896] max-sm:px-[2rem] max-sm:py-[1rem] rounded-lg  sm:px-[3rem] sm:py-[1.3rem] max-5s:px-[1rem] max-5s:py-[0.5rem] max-5s:text-[0.9rem] max-5s:mt-[10px] 5s:mt-8">
            Movies
          </div>
          <div>
            <Categories
              movieGenreName={movieGenreName}
              movieGenreData={movieGenreData}
              title="Our Genres"
              genreImg={genreImg}
            />
          </div>
          <div>
            <Categories
              movieGenreName={movieGenreName}
              genreImg={topTen}
              title="Top 10 In Genres"
            />
          </div>
          <div>
            <Trending moviesData={moviesData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesXShows;
