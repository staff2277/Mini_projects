import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoviesXShows from "./pages/MoviesXShows";
import Support from "./pages/Support";
import Subscriptions from "./pages/Subscriptions";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const App = () => {
  let [moviesData, setMoviesData] = useState([]);
  let [seriesData, setSeriesData] = useState([]);

  /* const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US"; */
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTJkYjY1ODRmMWJiMGI3NjRmMWJmNDQ1YjUwM2Q4MyIsIm5iZiI6MTczNTY1NDQxNS41MDgsInN1YiI6IjY3NzNmYzBmY2ZlNjI2NDRkZjEzNTlhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pk3RyAEEF9i65lV6qepQ5vPo_pPJsiWTtsRFYf31_LU",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      options
    )
      .then((res) => res.json())
      .then((data) => {
        const poster = data.results.map((value) => value);
        setMoviesData(poster);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
      options
    )
      .then((res) => res.json())
      .then((data) => {
        const poster = data.results.map((value) => value);
        setSeriesData(poster);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="text-white">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home seriesData={seriesData} moviesData={moviesData} />}
        />
        <Route
          path="/moviesXshows"
          element={
            <MoviesXShows seriesData={seriesData} moviesData={moviesData} />
          }
        />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Routes>
    </div>
  );
};

export default App;
