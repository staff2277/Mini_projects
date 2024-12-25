const GridText = () => {
  return (
    <div className="border-2 text-center">
      <div className="">
        <div className="max-sm:text-[2rem] sm:text-[2.5rem] font-extrabold">
          The Best Streaming Experience
        </div>
        <p className="mt-5">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.{" "}
          <span className="max-sm:hidden">
            With StreamVibe, you can enjoy a wide variety of content, including
            the latest blockbusters, classic movies, popular TV shows, and more.
            You can also create your own watchlists, so you can easily find the
            content you want to watch.
          </span>
        </p>
        <div className="">
          <button className="bg-[#E50000] normal-case hover:bg-[#3a3a3a] focus:bg-[#3f3f3f] active:bg-[#3f3f3f] focus:outline-none focus:ring focus:ring-[#cac8c896] max-sm:px-[2rem] max-sm:py-[1rem] rounded-lg max-sm:mt-4 sm:mt-7 sm:px-[3rem] sm:py-[1.3rem]">
            Start Watching Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridText;
