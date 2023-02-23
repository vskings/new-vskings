import React, { useContext } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { AuthContext } from '../context/AuthContext';

const MobileMenu = () => {
  const { setModalIsOpen, navbar, setNavbar } = useContext(AuthContext);

  function login() {
    setNavbar(false);
    setModalIsOpen(true);
  }

  return (
    <div
      className={`flex-col h-auto z-50 absolute top-0 right-0 space-y-8 bg-white dark:bg-black ${
        navbar ? 'flex pl-4 pb-4 w-3/5' : 'hidden'
      }`}
    >
      <div className="flex justify-end">
        <button
          className="flex mt-2 mr-1 float-right"
          onClick={() => setNavbar(false)}
        >
          <GrFormClose
            size={30}
            className="stroke-black dark:stroke-grey-200"
          />
        </button>
      </div>
      <ul className="items-center justify-center space-y-10 mb-[2em]">
        <li className="text-grey-500 dark:text-grey-300 hover:text-secondary2-500 hover:dark:text-secondary2-500 capitalize font-semibold font-poppins text-sm">
          <a href="javascript:void(0)" onClick={() => setNavbar(false)}>
            Tournaments
          </a>
        </li>
        <li className="text-grey-500 dark:text-grey-300 hover:text-secondary2-500 hover:dark:text-secondary2-500 capitalize font-semibold font-poppins text-sm">
          <a href="javascript:void(0)" onClick={() => setNavbar(false)}>
            Betting
          </a>
        </li>
        <li className="text-grey-500 dark:text-grey-300 hover:text-secondary2-500 hover:dark:text-secondary2-500 capitalize font-semibold font-poppins text-sm">
          <a href="javascript:void(0)" onClick={() => setNavbar(false)}>
            Head-to-head
          </a>
        </li>
      </ul>
      <div>
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          onClick={login}
          className="bg-secondary2-500 dark:bg-white flex text-white dark:text-grey-800 py-[8px] px-[30px] web-p4 rounded-[40px] border"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
