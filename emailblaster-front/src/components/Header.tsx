import React, { useState } from "react";
import I from "../assets/images/svg/I.svg";
import N from "../assets/images/svg/N.svg";
import V from "../assets/images/svg/V.svg";
import E from "../assets/images/svg/E.svg";
import S from "../assets/images/svg/S.svg";
import T from "../assets/images/svg/T.svg";
import HUB from "../assets/images/svg/hub.svg";
import { FaPaperPlane } from "react-icons/fa";
import { Col, Input, Row } from "reactstrap";
import { useForm } from "react-hook-form";
import { HiOutlineLocationMarker } from "react-icons/hi";
import search from "../assets/images/svg/search.svg"
import {IoIosArrowDown} from "react-icons/io"
import investHubLogoColor from "../assets/images/svg/investHubLogoColor.svg"

export const Header = () => {
  
  const [navbar, setNavbar] = useState(false);


  const methods = useForm();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;


  return (
    <>
          <div className=" header h-100 w-100">

        
          <div className="center-div flex ">
            <img
              src={investHubLogoColor}
              alt="user-profile"
              className=" mr-1  logo-position"
            />
          </div>
          <div className="center-div flex">
          <div className="pointer  header-position lg:flex">
          <div className=" linear-gradient  hidden lg:flex ">
            <span className="font-label-btn-700 mt-1  ">START INVESTING</span>
          </div>
          </div>
          <div className="search-field ml-12 hidden  lg:flex">
          <img src={search} className=" font-size-10 ml-1" alt="Search Icon" />
          <Input
                      type="text"
                      name="zipcode"
                      register={register}
                      errors={errors}
                      control={control}
                      style={{fontFamily:"Arial"}}
                      placeholder="Search"
                      className="form-control-header font-label center-div font-size-12 "
                      withoutLabel={true}
                      hidePasswordButton={true}
                    />
          </div>
          <div className="font-label-btn-700 ml-10 pointer each-wrap w-2/12 center-div">
          INVESTHUB CONNECTS
          </div>
          <div className="font-label-btn-700 ml-5 pointer each-wrap w-2/12 center-div">
            RAISE CAPITAL
          </div>
          <div className="font-label-btn-700 ml-5 pointer each-wrap w-2/12 center-div">
            EDIT MY CAMPAIGN
          </div>
          </div>

                    <div className="ml-5 pointer flex grow w-40 align-items-end each-wrap w-2/12 place-content-end align-content-end text-end right-div  lg:ml-10 md:ml-10">
              <div className="user-avatar center-div">M</div>
              <div className="center-div flex align-content-center mb-3 font-label-italic-orange">
              <IoIosArrowDown/>
              </div>
          </div>
      </div>
    </>
  );
};


export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [logged, setLogged] = useState(false);


  return (
      <nav className="w-full bg-header shadow">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
              <div>
                  <div className="flex items-center justify-between py-3 md:py-5 md:block">
                      <a href="javascript:void(0)">
                      <img
              src={investHubLogoColor}
              alt="user-profile"
              className=" mr-1  logo-position"
            />                      </a>
                      <div className="md:hidden">
                          <button
                              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                              onClick={() => setNavbar(!navbar)}
                          >
                              {navbar ? (
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6 text-white"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                      <path
                                          fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                      />
                                  </svg>
                              ) : (
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6 text-black"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M4 6h16M4 12h16M4 18h16"
                                      />
                                  </svg>
                              )}
                          </button>
                      </div>
                  </div>
              </div>
              <div>
                  <div
                      className={`flex-1   justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                          navbar ? "block" : "hidden"
                      }`}
                  >
                      <ul className="items-center  place-content-center align-items-center flex justify-center space-y-8 space-x-4 md:flex md:space-x-6 md:space-y-0">
                          <li className="font-label-btn-700 mr-2 hover:text-orange-600">
                              <a href="javascript:void(0)">Home</a>
                          </li>
                          <li className="font-label-btn-700 mr-2 hover:text-orange-600">
                              <a href="javascript:void(0)">About us</a>
                          </li>
                          <li className="font-label-btn-700 mr-2 hover:text-orange-600">
                              <a href="javascript:void(0)">Start Investing</a>
                          </li>
                          <li className="font-label-btn-700  hover:text-orange-600">
                              <a href="javascript:void(0)">Raise Capital</a>
                          </li>
                      </ul>

                      {/* <div className="mt-3 space-y-2 lg:hidden ">
                  <a
                      href="javascript:void(0)"
                      className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                  >
          Sign in
                  </a>
                  <a
                      href="javascript:void(0)"
                      className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                  >
                      Sign up
                  </a>
              </div> */}
                  </div>
              </div>
              {
                !logged && 
                <div className="hidden space-x-2 md:inline-block">
                  <a
                      href="javascript:void(0)"
                      className="px-4 py-2 text-white bg-orange-primary font-noah-700 rounded-md shadow hover:bg-gray-800"
                  >
                      Sign in
                  </a>
                  <a
                      href="javascript:void(0)"
                      className="px-4 py-2 text-gray-800 font-noah-700 bg-white rounded-md shadow hover:bg-gray-100"
                  >
                      Sign up
                  </a>
              </div>
              }
              
              {logged &&
              <main>
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* <!-- Replace with your content --> */}
                <div className="px-4 py-6 sm:px-0">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                </div>
                {/* <!-- /End replace --> */}
              </div>
            </main>
          //                     <div className="hidden space-x-2 md:inline-block" onClick={() => setLogged(!logged)}>
          //     <div className="ml-5 pointer absolute flex grow w-40 align-items-end each-wrap w-2/12 place-content-end align-content-end text-end right-div  lg:ml-10 md:ml-10">
          //     <div className="user-avatar center-div">M</div>
          //     <div className="center-div flex align-content-center mb-3 font-label-italic-orange">
          //     <IoIosArrowDown/>
          //     </div>
          //     </div>
          // </div>

            }
            </div>
              
      </nav>
  );
}

export const NavBarLogged = () => {
  const [navbar, setNavbar] = useState(false);
  const [logged, setLogged] = useState(false);


  return (
      <nav className="w-full bg-header shadow">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
              <div>
                  <div className="flex items-center justify-between py-3 md:py-5 md:block">
                      <a href="javascript:void(0)">
                      <img
              src={investHubLogoColor}
              alt="user-profile"
              className=" mr-1  logo-position"
            />                      </a>
                      <div className="md:hidden">
                          <button
                              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                              onClick={() => setNavbar(!navbar)}
                          >
                              {navbar ? (
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6 text-white"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                      <path
                                          fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                      />
                                  </svg>
                              ) : (
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6 text-black"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M4 6h16M4 12h16M4 18h16"
                                      />
                                  </svg>
                              )}
                          </button>
                      </div>
                  </div>
              </div>
              <div>
                  <div
                      className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                          navbar ? "block" : "hidden"
                      }`}
                  >
                      <ul className="items-center place-content-center align-items-center flex justify-center space-y-8 space-x-4 md:flex md:space-x-6 md:space-y-0">
                      <li className=" linear-gradient pointer hidden lg:flex ">
                      <a className="font-label-btn-700 mt-1  ">START INVESTING</a>
                      </li>
                          <li className="font-label-btn-700  hover:text-orange-600">
                              <a href="javascript:void(0)">INVESTHUBCONNECTS</a>
                          </li>
                          <li className="font-label-btn-700 hover:text-orange-600">
                              <a href="javascript:void(0)">RAISE CAPITAL</a>
                          </li>
                          <li className="font-label-btn-700  hover:text-orange-600">
                              <a href="javascript:void(0)">EDIT MY CAMPAIGN</a>
                          </li>
                      </ul>

                      {/* <div className="mt-3 space-y-2 lg:hidden ">
                  <a
                      href="javascript:void(0)"
                      className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                  >
          Sign in
                  </a>
                  <a
                      href="javascript:void(0)"
                      className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                  >
                      Sign up
                  </a>
              </div> */}
                  </div>
              </div>
              {
                !logged && 
                <div className="hidden space-x-2 md:inline-block">
                  <a
                      href="javascript:void(0)"
                      className="px-4 py-2 text-white bg-orange-primary font-noah-700 rounded-md shadow hover:bg-gray-800"
                  >
                      Sign in
                  </a>
                  <a
                      href="javascript:void(0)"
                      className="px-4 py-2 text-gray-800 font-noah-700 bg-white rounded-md shadow hover:bg-gray-100"
                  >
                      Sign up
                  </a>
              </div>
              }
              
              {logged &&
              <main>
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* <!-- Replace with your content --> */}
                <div className="px-4 py-6 sm:px-0">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                </div>
                {/* <!-- /End replace --> */}
              </div>
            </main>
          //                     <div className="hidden space-x-2 md:inline-block" onClick={() => setLogged(!logged)}>
          //     <div className="ml-5 pointer absolute flex grow w-40 align-items-end each-wrap w-2/12 place-content-end align-content-end text-end right-div  lg:ml-10 md:ml-10">
          //     <div className="user-avatar center-div">M</div>
          //     <div className="center-div flex align-content-center mb-3 font-label-italic-orange">
          //     <IoIosArrowDown/>
          //     </div>
          //     </div>
          // </div>

            }
            </div>
              
      </nav>
  );
}
