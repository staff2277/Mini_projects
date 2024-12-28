import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoviesXShows from "./pages/MoviesXShows";
import Support from "./pages/Support";
import Subscriptions from "./pages/Subscriptions";
import Navbar from "../components/Navbar";

const App = () => {
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
