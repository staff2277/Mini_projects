import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex justify-between z-20 items-center max-sm:pt-5 sm:pt-8 absolute w-full border-2 sm:px-[50px]  max-sm:px-[20px]">
      <div className="flex items-center gap-2">
        <img className="sm:w-[90px] max-sm:w-[50px]" src="/images/logo.svg" alt="logo" /> 
        <img className="sm:w-[100px] max-sm:w-[70px]" src="/images/StreamVibe.svg" alt="logo" />
      </div>
      <nav className="flex mr-[120px] max-lg:hidden gap-3 border-[4px] border-[#3a3a3a] px-[50px] py-[25px] rounded-xl">
        <Link to="/">Home</Link>
        <Link to="/moviesXshows">MoviesXShows</Link>
        <Link to="/support">Support</Link>
        <Link to="/subscriptions">Subscriptions</Link>
      </nav>
      <div className="max-lg:hidden flex items-center gap-3">
        <span><img src="/images/search.svg" alt="search icon" /></span>
        <span><img src="/images/notification.svg" alt="notification icon" /></span>
      </div>
      <div className="lg:hidden border-2 border-[#BFBFBF] max-sm:px-[10px] max-sm:py-[20px] max-lg:px-[20px] max-lg:py-[25px] rounded-xl">
        <span className=""><img src="/images/menu.svg" alt="" /></span>
      </div>
    </div>
  );
};

export default Navbar;
