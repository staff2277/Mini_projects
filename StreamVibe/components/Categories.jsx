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
      <div className="flex items-center border-2 border-red-700">
        <span>
          <div>Explore our wide variety of categories</div>
          <div>
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </div>
        </span>
        <span className="ml-auto flex items-center">
          <div>
            <img src="/images/left.svg" alt="left icon" />
          </div>
          <div className="flex text-[2rem]">
            <span>-</span>
            <span>-</span>
            <span>-</span>
            <span>-</span>
          </div>
          <div>
            <img src="/images/right.svg" alt="right icon" />
          </div>
        </span>
      </div>
      <div className="border-2 border-green-600 flex overflow-hidden">
        {category.map((value, index) => {
          const start = index * 4;
          let imagesToShow = categoryImg.slice(start, start + 4);

          return (
            <div
              key={index}
              className="sm:my-[4rem] sm:mx-[1.5rem] sm:p-[20px] bg-[#1A1A1A] rounded-lg"
            >
              <div className="grid grid-cols-[100px_100px] grid-rows-2">
                {imagesToShow.map((img) => (
                  <img key={`${index}-${img.id}`} src={img.image} alt={`category-${value}`} />
                ))}
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
    </div>
  );
};

export default Categories;
