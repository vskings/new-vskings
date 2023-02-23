import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { GrFormClose } from 'react-icons/gr';
import { AuthContext } from '../context/AuthContext';

// ReactModal.setAppElement('#root');

const Modalform = () => {
  const { modalIsOpen, setModalIsOpen } = useContext(AuthContext);
  const [login, setLogin] = useState(false);
  const [forgotpassword, setForgotPassword] = useState(false);

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      className="bg-black bg-opacity-70 backdrop-blur-xs flex justify-center items-center h-full"
    >
      <div className="relative z-50  w-full h-auto min-h-4/5 max-w-xs md:min-h-4/5 bg-white rounded-lg shadow dark:bg-black ">
        <div className="flex justify-end">
          <button className="flex mt-4 mr-4 float-right" onClick={closeModal}>
            <GrFormClose
              size={25}
              className="stroke-black dark:stroke-grey-200"
            />
          </button>
        </div>
        {forgotpassword ? (
          <>
            <div className="grid gap-y-3 ">
              <h3 className="text-black text-webp2 font-semibold font-poppins mx-auto dark:text-white">
                Forgot your password
              </h3>
              <caption className="text-black web-sub2 dark:text-grey-300 px-4">
                Please, enter the email address associated with your account
              </caption>
            </div>
            <form className="w-full h-full flex flex-col gap-y-2 overflow-auto my-4 px-5">
              <div className="gap-y-1 flex flex-col">
                <div className="flex w-full items-center">
                  <span className="text-black dark:text-grey-300 font-poppins text-xs font-medium leading-[113.5%]">
                    Enter address
                  </span>
                  <span className="text-error-500">*</span>
                </div>
                <div className="flex items-center border border-secondary2-500 rounded-md p-4">
                  <input
                    type="text"
                    name="email"
                    placeholder="e.g. myemailaddress@gmail.com"
                    className=" flex w-full border-none placeholder:text-xs placeholder:text-grey-300 text-grey-300 outline-none focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col my-4  w-full">
                <button
                  type="submit"
                  className="bg-secondary2-500 text-white text-webP4 font-bold font-poppins py-2 rounded-md my-3 "
                >
                  Send reset code
                </button>

                <div className="flex w-full  justify-center items-center">
                  <span className="text-grey-500 dark:text-white mob-sub1 font-bold font-poppins">
                    Don't have an account?
                  </span>
                  <button
                    onClick={() => setLogin(false)}
                    className="ml-2 text-secondary2-500 mob-sub1 font-bold font-poppins"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </>
        ) : login ? (
          <>
            <div className="grid gap-y-3 ">
              <h3 className="text-black text-webp2 font-semibold font-poppins mx-auto dark:text-white">
                Log In
              </h3>
              <caption className="text-black web-sub2 dark:text-grey-300">
                Please, enter your log in details in the fields below
              </caption>
            </div>
            <form className="w-full h-full flex flex-col gap-y-2 overflow-auto my-4 px-5">
              <div className="gap-y-1 flex flex-col">
                <div className="flex w-full items-center">
                  <span className="text-black dark:text-grey-300 font-poppins text-xs font-medium leading-[113.5%]">
                    Enter address
                  </span>
                  <span className="text-error-500">*</span>
                </div>
                <div className="flex items-center border border-secondary2-500 rounded-md p-4">
                  <input
                    type="text"
                    name="email"
                    placeholder="e.g. myemailaddress@gmail.com"
                    className=" flex w-full border-none placeholder:text-xs placeholder:text-grey-300 text-grey-300 outline-none focus:outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="gap-y-1 flex mb-1 flex-col">
                <div className="flex w-full items-center">
                  <span className="text-black dark:text-grey-300 font-poppins text-xs font-medium leading-[113.5%]">
                    Password
                  </span>
                  <span className="text-error-500">*</span>
                </div>
                <div className="flex items-center border border-secondary2-500 rounded-md p-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="************"
                    className=" flex w-full border-none placeholder:text-xs placeholder:text-grey-300 text-grey-300 outline-none focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="flex w-full justify-end">
                <button
                  onClick={() => setForgotPassword(true)}
                  className="mob-sub1 font-poppins font-semibold text-secondary2-500"
                >
                  Forgot password
                </button>
              </div>

              <div className="flex flex-col my-4  w-full">
                <button
                  type="submit"
                  className="bg-secondary2-500 text-white text-webP4 font-bold font-poppins py-2 rounded-md my-3 "
                >
                  Sign Up
                </button>

                <div className="flex w-full  justify-center items-center">
                  <span className="text-grey-500 dark:text-white mob-sub1 font-bold font-poppins">
                    Don't have an account?
                  </span>
                  <button
                    onClick={() => setLogin(false)}
                    className="ml-2 text-secondary2-500 mob-sub1 font-bold font-poppins"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="grid gap-y-3 ">
              <h3 className="text-black text-webp2 font-semibold font-poppins mx-auto dark:text-white">
                Welcome to VSKINGS
              </h3>
              <caption className="text-black web-sub2 dark:text-grey-300">
                Please, enter your details in the fields below
              </caption>
            </div>
            <form className="w-full h-full flex flex-col gap-y-2 overflow-auto my-4 px-5">
              <div className="gap-y-1 flex flex-col">
                <div className="flex w-full items-center">
                  <span className="text-black dark:text-grey-300 font-poppins text-xs font-medium leading-[113.5%]">
                    Enter address
                  </span>
                  <span className="text-error-500">*</span>
                </div>
                <div className="flex items-center border border-secondary2-500 rounded-md p-4">
                  <input
                    type="text"
                    name="email"
                    placeholder="e.g. myemailaddress@gmail.com"
                    className=" flex w-full border-none placeholder:text-xs placeholder:text-grey-300 text-grey-300 outline-none focus:outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="gap-y-1 flex flex-col">
                <div className="flex w-full items-center">
                  <span className="text-black dark:text-grey-300 font-poppins text-xs font-medium leading-[113.5%]">
                    Username
                  </span>
                  <span className="text-error-500">*</span>
                </div>
                <div className="flex items-center border border-secondary2-500 rounded-md p-4">
                  <input
                    type="text"
                    name="username"
                    placeholder="e.g. username001"
                    className=" flex w-full border-none placeholder:text-xs placeholder:text-grey-300 text-grey-300 outline-none focus:outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="gap-y-1 flex mb-1 flex-col">
                <div className="flex w-full items-center">
                  <span className="text-black dark:text-grey-300 font-poppins text-xs font-medium leading-[113.5%]">
                    Password
                  </span>
                  <span className="text-error-500">*</span>
                </div>
                <div className="flex items-center border border-secondary2-500 rounded-md p-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="************"
                    className=" flex w-full border-none placeholder:text-xs placeholder:text-grey-300 text-grey-300 outline-none focus:outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="gap-y-2 flex flex-col">
                <div className="flex w-full items-center text-black dark:text-grey-300 font-poppins text-xs font-medium leading-[113.5%]">
                  Country (optional)
                </div>
                <div className="flex items-center border border-secondary2-500 rounded-md p-4">
                  <input
                    type="text"
                    name="country"
                    placeholder="e.g. USA"
                    className=" flex w-full border-none placeholder:text-xs placeholder:text-grey-300 text-grey-300 outline-none focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col my-4  w-full">
                <div className="flex justify-start items-center gap-x-4 w-full">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="block border border-secondary2-500 rounded bg-gray-50 focus:ring-3 focus:ring-secondary2-500 dark:bg-gray-600 dark:border-secondary2-500 dark:focus:ring-secondary2-500 dark:ring-offset-secondary2-500 dark:focus:ring-offset-secondary2-500"
                      required
                    />
                  </div>
                  <div className="ml-2 text-grey-500 dark:text-white text-[10px] font-normal font-poppins">
                    I agree to the&nbsp;
                    <span className="text-secondary2-500">
                      terms & conditions, privacy policy
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-secondary2-500 text-white text-webP4 font-bold font-poppins py-2 rounded-md my-3 "
                >
                  Sign Up
                </button>

                <div className="flex w-full  justify-center items-center">
                  <span className="text-grey-500 dark:text-white mob-sub1 font-bold font-poppins">
                    Already have an account?
                  </span>
                  <button
                    onClick={() => setLogin(true)}
                    className="ml-2 text-secondary2-500 mob-sub1 font-bold font-poppins"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </Modal>
  );
};

export default Modalform;
