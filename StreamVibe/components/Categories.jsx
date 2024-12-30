import clsx from "clsx";
const Categories = () => {
  let category = ["Action", "Adventure", "Comedy", "Drama", "Horror"];
  let categoryImg = [];

  for (let index = 1; index <= 20; index++) {
    categoryImg.push({
      id: index,
      image: `/images/categories/Image${index}.png`,
    });
  }

  return (
    <div className="my-[5rem]">
      <div className="flex items-center border-2 border-red-700 overflow-hidden">
        <span className="border-2">
          <h1 className="sm:text-[2.3rem] max-sm:text-[1.8rem] font-bold">
            Explore our wide variety of categories
          </h1>
          <p className="my-3 text-[#999999] sm:text-[1.1rem]">
            Whether you&apos;re looking for a comedy to make you laugh, a drama
            to make you think, or a documentary to learn something new
          </p>
        </span>
        <span className="max-xl:hidden ml-auto bg-[#0F0F0F] flex items-center border-2 rounded-lg py-2 px-3 border-[#3a3a3a]">
          <div className="p-3 bg-[#1A1A1A] rounded-lg mr-2">
            <img src="/images/left.svg" alt="left icon" />
          </div>
          <div className="flex text-[3rem] gap-1">
            <span className="text-[#E50000] ">-</span>
            <span className="text-[#1A1A1A] ">-</span>
            <span className="text-[#1A1A1A] ">-</span>
            <span className="text-[#1A1A1A] ">-</span>
          </div>
          <div className="p-3 bg-[#1A1A1A] rounded-lg ml-2">
            <img className="" src="/images/right.svg" alt="right icon" />
          </div>
        </span>
      </div>
      <div className="border-2 border-green-600 gap-3 flex overflow-hidden flex-nowrap justify-center">
        {category.map((value, index) => {
          const start = index * 4;
          const imagesToShow = categoryImg.slice(start, start + 4);

          return (
            <div
              key={index}
              className={clsx(
                "sm:my-[4rem] sm:p-[20px] bg-[#1A1A1A] rounded-lg",
                index > 1 && "max-sm:hidden",
                index > 1 && "max-md:hidden",
                index > 1 && "max-lg:hidden",
                index > 2 && "max-xl:hidden",
                index > 3 && "max-2xl:hidden"
              )}
            >
              <div className="relative grid max-sm:place-content-center justify-items-center sm:grid-cols-[120px_120px] max-5s:grid-cols-[70px_70px] max-6s:grid-cols-[80px_80px] max-sm:grid-cols-[100px_100px] max-md:grid-cols-[120px_120px] max-lg:grid-cols-[80px_80px] gap-3 grid-rows-2 border-2">
                {imagesToShow.map((img) => (
                  <img
                    className="w-full"
                    key={`${index}-${img.id}`}
                    src={img.image}
                    alt={`category-${value}`}
                  />
                ))}
                <div className="absolute h-full inset-0 w-full bg-category-gradient z-10"></div>
              </div>
              <div className="flex mt-2 border-2 w-full">
                <span className="mr-auto">{value}</span>
                <span>
                  <img src="/images/right.svg" alt="" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
