import { Button, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";

const GridText = () => {
  return (
    <div className="z-50 text-center text-white realative bg-transparent">
      <div className="absolute z-50 bottom-[-79px]">
        <Typography className="text-[2.6rem] font-[600] ">
          The Best Streaming Experience
        </Typography>
        <p className="text-sm text-gray-400 ">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <div className="my-5 mb">
          <Button
            variant="contained"
            startIcon={<PlayArrowIcon />}
            
            className="bg-[#E50000] normal-case hover:bg-[#252525] focus:bg-[#3f3f3f] active:bg-[#3f3f3f] focus:outline-none focus:ring focus:ring-[#cac8c896]"
          >
            Start Watching Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GridText;
