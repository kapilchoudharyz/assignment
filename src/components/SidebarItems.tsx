import { NavLink } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

interface stepsType {
  step: string;
  about: string;
  openSteps: React.ReactNode;
  closedSteps: React.ReactNode;
  stepNumber: number;
  route: string;
  handleClickNumber: React.Dispatch<React.SetStateAction<number>>;
  clickNumber: number;
}

const SidebarItems: React.FC<stepsType> = ({
  openSteps,
  closedSteps,
  step,
  stepNumber,
  about,
  route,
  handleClickNumber,
  clickNumber,
}) => {
  const navRef = useRef<HTMLAnchorElement>(null);
  const [activeLink, setActiveLink] = useState(false);
  useEffect(() => {
    const element = navRef.current;
    if (element && element.classList.contains("active")) {
      setActiveLink(true);
    }
    if (element && !element.classList.contains("active")) setActiveLink(false);
  }, [clickNumber]);
  return (
    <>
      <NavLink
        className={`navlink transition-all duration-700`}
        ref={navRef}
        to={route}
        onClick={() => handleClickNumber((pre) => pre + 1)}
      >
        <div className={`${activeLink ? "bg-[#2b2e3b]" : ""}`}>
          <div className={`flex flex-row items-center px-6 py-2 `}>
            <div className={"pr-2"}>{activeLink ? openSteps : closedSteps}</div>

            <div className="">
              <div
                className={`text-[12px] ${
                  activeLink ? "text-[#3ec7e3]" : "text-stone-500"
                } `}
              >
                STEP {stepNumber + 1}
              </div>
              <div className={"flex flex-row items-center"}>
                <h6 className={"text-[12px]"}>{step}</h6>
                <img
                  src="src/assets/arrow_right.svg"
                  alt="Arrow pointing towards right"
                  className={`pr-5 ${!activeLink ? "hidden" : ""}`}
                />
              </div>
            </div>
          </div>
          <div>
            <p
              className={`px-6 py-2 text-[12px] text-[#878a9b] ${
                activeLink ? "" : "hidden"
              }`}
            >
              {about}
            </p>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default SidebarItems;
