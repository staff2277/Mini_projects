import { useRef } from "react";

const Categories = () => {
  let category = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Horror",
    "Sci-Fi",
    "Romance",
  ];
  let categoryImg = [];

  for (let i = 1; i <= 28; i++) {
    categoryImg.push(`/images/categories/Image${i}.png`);
  }

  const container = useRef(null);

  const onClickLeft = () => {
    if (container.current) {
      const scrollAmount =
        container.current.querySelector(".snap-start").offsetWidth; // Get width of a category card
      console.log("left clicked");
      container.current.scrollLeft -= scrollAmount; // Scroll left by one card's width
    }
  };

  const onClickRight = () => {
    if (container.current) {
      const scrollAmount =
        container.current.querySelector(".snap-start").offsetWidth; // Get width of a category card
      container.current.scrollLeft += scrollAmount; // Scroll right by one card's width
    }
  };

  return (
    <div className="my-[5rem]">
      <div className="flex items-center ">
        <span className="  w-full">
          <h1 className="5s:text-[2rem] sm:text-[2.5rem] max-5s:text-[1rem] font-bold">
            Explore our wide variety of categories
          </h1>
          <p className="my-3 text-[#999999] sm:text-[1rem] max-5s:text-[0.8rem]">
            Whether you&#39;re looking for a comedy to make you laugh, a drama
            to make you think, or a documentary to learn something new ok
          </p>
        </span>
      </div>
      <div>
        <div
          ref={container}
          className="relative  flex  overflow-x-hidden snap-mandatory snap-x snap-item"
        >
          {category.map((value, index) => {
            const start = index * 4;
            let cards = categoryImg.slice(start, start + 4);
            let card = cards.map((value, i) => (
              <img key={i} src={value} alt={`image${i}`} />
            ));
            return (
              <div
                key={index}
                className="my-[4rem] mr-[1.5rem] p-[20px] bg-[#1A1A1A] rounded-lg snap-start"
              >
                <div className="grid grid-cols-[100px_100px] grid-rows-2">
                  {card}
                </div>
                <div className="flex mt-2">
                  <span className="mr-auto">{value}</span>
                  <span>
                    <img src="/images/right.svg" alt="" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" flex justify-center text-[3rem] gap-2">
          <div
            onClick={onClickLeft}
            className=" sm:p-5 max-sm:p-3 bg-[#3a3a3a] hover:bg-[#1A1A1A] rounded-lg mr-2 cursor-pointer"
          >
            <img src="/images/left.svg" className="" alt="left icon" />
          </div>
          <div
            onClick={onClickRight}
            className="sm:p-5  max-sm:p-3 bg-[#3a3a3a] hover:bg-[#1A1A1A] rounded-lg mr-2 cursor-pointer"
          >
            <img src="/images/right.svg" className="" alt="right icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
