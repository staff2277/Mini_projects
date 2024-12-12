import React from "react";
import cardsData from "../../assets/images/cards/Cards_data";
import "./titleCards.css";

const TitleCards = () => {
  return (
/*     <div className="border-2 title-cards mt-[50px] mb-[30px]">
      <h2 className="mb-[8px]">Popular on Netflix</h2>
      <div className="card-list flex gap-[10px] border-2 overflow-x-scroll whitespace-nowrap">
        <div style={{ width: "100%" }} className="flex">
          {cardsData.map((card, index) => {
            return (
              <div className="card relative w-[240px]" key={index}>
                <img
                  src={card.image}
                  alt={card.name}
                  className="cardImg rounded-[4px] cursor-pointer w-full"
                />
                <p className="absolute bottom-[10px] right-[10px] ">{card.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div> */
    console.log('working')
  );
};

export default TitleCards;