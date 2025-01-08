import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoviesXShows from "./pages/MoviesXShows";
import Support from "./pages/Support";
import Subscriptions from "./pages/Subscriptions";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/comments/";

  let [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const names = data.map((value) => value.id);
        setData(names);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moviesXshows" element={<MoviesXShows />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Routes>
    </div>
  );
};

export default App;
