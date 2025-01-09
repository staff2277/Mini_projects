const MoviesXShows = ({ seriesData, moviesData }) => {
  let moviesbg = moviesData.map((value) => value.backdrop_path);
  return (
    <div>
      <div className="h-[15vh] border-2"></div>
      <div className="h-[85vh] border-2 border-red-500 bg-cover bg-center">
        <div
          className="sm:px-[50px] max-sm:px-[20px] bg-cover bg-center h-[85vh]"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${moviesbg[2]})`,
          }}
        >
          <div>
            <div>Avengers : Endgame</div>
            <div>
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos's actions and undo the chaos to the
              universe, no matter what consequences may be in store, and no
              matter who they face... Avenge the fallen.
            </div>
            <div className="border-2  flex justify-center">
              <button className="flex gap-3 bg-[#E50000] normal-case hover:bg-[#3a3a3a] focus:bg-[#3f3f3f] active:bg-[#3f3f3f] focus:outline-none focus:ring focus:ring-[#cac8c896] max-sm:px-[2rem] max-sm:py-[1rem] rounded-lg  sm:px-[3rem] sm:py-[1.3rem] max-5s:px-[1rem] max-5s:py-[0.5rem] max-5s:text-[0.9rem] max-5s:mt-[10px] 5s:mt-8">
                <img src="/play.svg" alt="play-icon" />
                Play Now
              </button>
              <button className="bg-[#141414] border-2 border-[#262626] 5s:p-[1rem] max-5s:p-[0.8rem] max-5s:text-[0.8rem] rounded-lg font-bold hover:bg-[#3a3a3a] focus:bg-[#3f3f3f] active:bg-[#3f3f3f] focus:outline-none focus:ring focus:ring-[#cac8c896]">
                <img src="/fav.svg" alt="add to favourites icon" />
              </button>
              <button className="bg-[#141414] border-2 border-[#262626] 5s:p-[1rem] max-5s:p-[0.8rem] max-5s:text-[0.8rem] rounded-lg font-bold hover:bg-[#3a3a3a] focus:bg-[#3f3f3f] active:bg-[#3f3f3f] focus:outline-none focus:ring focus:ring-[#cac8c896]">
                <img src="/like.svg" alt="like-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesXShows;
