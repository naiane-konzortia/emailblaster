import React from "react";
import { BiPlus } from "react-icons/bi";
import { useRedux } from "../hooks";

export const MoreInformation = () => {
  
  const { dispatch, useAppSelector } = useRedux();

  const { activePage, activeTimelineStep, activeSubStep } = useAppSelector((state) => ({
      activePage:state.Pages.activePage,
      activeTimelineStep: state.Pages.activeTimelineStep,
      activeSubStep: state.Pages.activeSubStep
  }))

  return (
    <>
      <div className="flex   bg-white  start-campaign-page">
      <div className=" mt-10 p-5">
        <div className="mt-5 align-items-center  each-wrap w-12/12 ">
          <span className="font-label-black-700 mt-5 ">
How to use this system
              </span>
        </div>
        <div className="mt-5 align-items-center  each-wrap w-12/12 ">
          <span className="font-label-italic mt-5 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.       
              </span>
        </div>
        <div className="mt-5 align-items-center  each-wrap w-12/12 ">
          <span className="font-label-black-700 mt-5 ">
          Ever Unsure on the steps?
              </span>
        </div>
        <div className="mt-5 align-items-center  each-wrap w-12/12 ">
          <span className="font-label-italic mt-5 ">
          Always go back to your 
          <span className="pointer font-label-blue">{" "}onboarding.guide </span>to review next steps.
              </span>
        </div>
      </div>
    </div>
 
    </>
  );
};
