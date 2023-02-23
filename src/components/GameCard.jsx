import React from 'react';

const GameCard = ({ image, title, deadline, price, link }) => {
  return (
    <figure className="w-fit ">
      <img
        src={image}
        alt=""
        className="overflow-hidden rounded-tr-md rounded-tl-md object-cover "
      />
      <figcaption className="flex flex-col gap-4 p-1">
        <div className="flex justify-end items-end ">
          <span className="web-sub2 text-white bg-secondary2-500 px-2 rounded-full">
            Featured
          </span>
        </div>
        <div className="flex flex-col justify-start gap-1">
          <h4 className="web-p3 text-grey-500 dark:text-white">{title}</h4>
          <p className="web-sub2 text-grey-500 dark:text-white">{deadline}</p>
        </div>
        <div className="flex justify-between items-center">
          <a
            href="/"
            className=" text-white web-sub1 bg-secondary2-500 trapezoid rounded-md py-2 px-4"
          >
            View Details
          </a>
          <div className="flex flex-col">
            <span className="web-sub3 text-grey-500 dark:text-white">
              Tournament Price
            </span>
            <p className="web-p4 text-secondary2-500 text-right">${price}</p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default GameCard;
