import React from 'react';
import {
  hero,
  ea,
  fifa,
  riot,
  ubisoft,
  krafton,
  eaBlack,
  fifaBlack,
  riotBlack,
  ubisoftBlack,
  kraftonBlack,
} from '../assets';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className=" bg-[url('https://i.ibb.co/72CKd79/Hero.png')] bg-cover bg-center ">
      <div className="bg-gradient-to-b from-transparent to-white dark:to-black h-auto flex flex-col gap-y-8 w-full pt-[100px] pb-4 px-4 md:px-10">
        <h1 className="text-4xl md:text-[80px] leading-[113.5%] font-array font-semibold text-grey-500 dark:text-white text-center">
          Dominate the esports space with us
        </h1>
        <p className="text-lg md:text-[20px] leading-[142.5%] font-poppins font-semibold text-grey-500 dark:text-white text-center">
          Play and host tournaments, place bets, and compete in head-to-head
          games
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <button className="bg-secondary2-500 text-white border border-secondary2-500 px-8 py-2 rounded-full web-p2">
            Create tournaments
          </button>
          <button className="bg-transparent text-white dark:text-secondary2-500 border border-secondary2-500 px-8 py-2 rounded-full web-p2">
            Join tournaments
          </button>
        </div>

        <caption className="web-p3 text-grey-500 dark:text-white my-8 mt-12 flex mx-auto">
          TRUSTED BY GAMERS AND ORGANIZERS
        </caption>

        {theme === 'light' ? (
          <figure className="flex justify-center flex-wrap h-auto gap-6 text-black mx-auto mb-10">
            <img
              src={fifaBlack}
              className="h-auto w-auto object-contain"
              alt="game"
            />
            <img
              src={riotBlack}
              className="h-auto w-auto object-contain"
              alt="riot"
            />
            <img
              src={eaBlack}
              className="h-auto w-auto object-contain"
              alt="ea"
            />
            <img
              src={ubisoftBlack}
              className="h-auto w-auto object-contain"
              alt="ubisoft"
            />
            <img
              src={kraftonBlack}
              className="h-auto w-auto object-contain"
              alt="krafton"
            />
          </figure>
        ) : (
          <figure className="flex justify-center flex-wrap h-auto gap-6 text-black mx-auto mb-10">
            <img
              src={fifa}
              className="h-auto w-auto object-contain"
              alt="game"
            />
            <img
              src={riot}
              className="h-auto w-auto object-contain"
              alt="riot"
            />
            <img src={ea} className="h-auto w-auto object-contain" alt="ea" />
            <img
              src={ubisoft}
              className="h-auto w-auto object-contain"
              alt="ubisoft"
            />
            <img
              src={krafton}
              className="h-auto w-auto object-contain"
              alt="krafton"
            />
          </figure>
        )}
      </div>
    </div>
  );
};

export default Hero;
