
const Navbar = () => {
  return (
    <div className="flex justify-between items-center 5s:pt-5">
      <div className="flex items-center gap-2">
        <img className="sm:w-[90px] max-sm:w-[50px]" src="/images/logo.svg" alt="logo" /> 
        <img className="sm:w-[100px] max-sm:w-[70px]" src="/images/StreamVibe.svg" alt="logo" />
      </div>
      <ul className="flex mr-[120px] max-lg:hidden gap-3 border-[4px] border-[#3a3a3a] px-[50px] py-[25px] rounded-xl">
        <li>Home</li>
        <li>Movie & Shows</li>
        <li>Support</li>
        <li>Subscription</li>
      </ul>
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
