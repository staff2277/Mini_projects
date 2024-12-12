import React, { useState, useEffect } from 'react'; 
import "./App.css";
import Navbar from "../components/Navbar";
import NavGrid from "../components/NavGrid";
import data from "../components/data";
import GridText from "../components/GridText";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const visibleData = windowWidth < 640 ? data.slice(0, 9) : data;
  
  const heroGrid = visibleData.map((data) => {
    return <NavGrid key={data.id} imageUrl={data.imageUrl} />;
  });


  const theme = createTheme({
    typography: {
      fontFamily: [
        'Manrope', // Manrope font
        'Arial', // fallback font
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Box
      className="bg-[#000000ee]"
      sx={{
        fontFamily: "Manrope",
      }}
    >
      <Navbar />
      <div className="grid grid-cols-9 max-sm:grid-cols-3 gap-3 relative">
        <img
          className="absolute  bottom-0 z-10 "
          src="/images/fade-top.svg"
          alt="fade-effect"
        />
        <img
          className="absolute  top-0 z-10"
          src="/images/fade-bottom.svg"
          alt="fade-effect"
        />
        <div className="flex items-center justify-center absolute top-[25%] left-0 w-full z-30 h-1/2">
          <img src="/images/play.svg" className="z-31 w-80 h-80 lg:w-[20rem] lg:h-[20rem] md:w-[15rem] md:h-[15rem] sm:w-[10rem] sm:h-[10rem] max-sm:w-[10rem] max-sm:h-[10rem] 5s:w-[5rem] 5s:h-[5rem] " alt="" />
        </div>

        {heroGrid}
      </div>
      <GridText />
    </Box>
    </ThemeProvider>
  );
}

export default App;
