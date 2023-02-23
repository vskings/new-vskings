import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { logo } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-black grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto h-[266px] px-10">
      <figure className="flex items-center">
        <img src={logo} alt="brand" />
      </figure>

      <div className="flex items-center gap-6">
        <a href="/" className="text-white web-sub1">
          Terms of use
        </a>
        <a href="/" className="text-white web-sub1">
          Privacy Policy
        </a>
      </div>

      <div className="flex items-center gap-6">
        <a
          href="/"
          className="text-white web-sub1 p-2 rounded-full bg-grey-400"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="/"
          className="text-white web-sub1 p-2 rounded-full bg-grey-400"
        >
          <AiFillTwitterCircle size={20} />
        </a>
        <a
          href="/"
          className="text-white web-sub1 p-2 rounded-full bg-grey-400"
        >
          <FiInstagram size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
