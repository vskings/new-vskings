import React from 'react';
import GameCard from './GameCard';
import { featured } from '../utils/data';
import TitleHeader from './TitleHeader';

const Featured = () => {
  return (
    <div className="flex flex-col mx-auto mb-[2em] ">
      <TitleHeader
        heading={'Featured Tournaments'}
        text={'View all tournaments'}
        link={'/'}
      />
      <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
        {featured.map((item) => (
          <div
            key={item.id}
            className="rounded-md border border-secondary2-500"
          >
            <GameCard
              image={item.image}
              title={item.title}
              link={item.link}
              deadline={item.deadline}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
