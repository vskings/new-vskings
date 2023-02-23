import React from 'react';
import '../index.css';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Layout from '../components/Layout';
import { avatar1, avatar2, avatar3, banner } from '../assets';
import Table from '../components/Table';
import Modalform from '../components/Modal';
import TitleHeader from '../components/TitleHeader';

const Homepage = () => {
  return (
    <div className="relative">
      <Layout>
        <Hero />
        <div className=" px-[2em]">
          <Featured />
        </div>
        <figure className="my-[4em] px-[2em]">
          <img src={banner} alt="" />
        </figure>
        <div className="flex flex-col mx-auto px-[2em] overflow-x-auto">
          <TitleHeader
            heading={'Latest Bets'}
            text={'View all bets'}
            link={'/'}
          />
          <Table />
        </div>
        <div className="flex flex-col mx-auto px-[2em] overflow-x-auto">
          <TitleHeader
            heading={'Open H2H Challenges'}
            text={'View all H2H Challenges'}
            link={'/'}
          />
          <Table />
        </div>
        <div className="flex flex-col mx-auto my-10 px-[2em]">
          <TitleHeader heading={'Why Choose Us'} />
          <figure className="grid grid-cols-1 sm:grid-cols-2">
            <div className="-ml-[2em]">
              <img src={avatar1} alt="" />
            </div>
            <figcaption className="flex flex-col gap-4 items-center justify-center">
              <h3 className="web-h3 text-grey-500 dark:text-white">
                Organize and host tournaments in top-played games
              </h3>
              <p className="web-sub1 text-grey-500 dark:text-white">
                Connect with other gamers and discover tournaments organized by
                the best, or organize your own.
              </p>
            </figcaption>
          </figure>
          <figure className="grid grid-cols-1 sm:grid-cols-2">
            <figcaption className="flex order-last md:order-first flex-col gap-4 items-center justify-center">
              <h3 className="web-h3 text-grey-500 dark:text-white">
                Organize and host tournaments in top-played games
              </h3>
              <p className="web-sub1 text-grey-500 dark:text-white">
                Connect with other gamers and discover tournaments organized by
                the best, or organize your own.
              </p>
            </figcaption>
            <div className="-mr-[2em]">
              <img src={avatar2} alt="" />
            </div>
          </figure>
          <figure className="grid grid-cols-1 sm:grid-cols-2">
            <div className="-ml-[2em]">
              <img src={avatar3} alt="" />
            </div>
            <figcaption className="flex flex-col gap-4 items-center justify-center">
              <h3 className="web-h3 text-grey-500 dark:text-white">
                Organize and host tournaments in top-played games
              </h3>
              <p className="web-sub1 text-grey-500 dark:text-white">
                Connect with other gamers and discover tournaments organized by
                the best, or organize your own.
              </p>
            </figcaption>
          </figure>
        </div>
        <Modalform />
      </Layout>
    </div>
  );
};

export default Homepage;
