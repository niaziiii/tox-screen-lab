import { Link, useLocation } from "react-router-dom";
import { navItems } from "../utils/constant";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white h-[14vh]">
      {showModal && (
        <div className="fixed w-full h-[100vh] right-0 bg-black/20 z-30">
          <div className="absolute bg-white h-full w-[20rem] right-0">
            <div
              className="absolute top-2 left-2 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <IoMdClose />
            </div>
            <div className="w-full flex justify-center mt-8 flex-col items-center">
              <Link to={"/"}>
                <img
                  src="/logo.png"
                  alt="logo"
                  className="h-[80px] w-[190px]"
                />
              </Link>
              <ul className="mt-8 items-center gap-6 flex flex-col">
                {navItems.map((nav, i) => {
                  const isActive = location.pathname.startsWith(nav.path);

                  return (
                    <li
                      className={`font-semibold text-xssm ${
                        isActive ? "text-lightBlue" : "hover:text-lightBlue/80"
                      } `}
                      key={i}
                    >
                      <Link
                        onClick={() => setShowModal(false)}
                        to={nav.path}
                        className=""
                      >
                        {nav.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center w-[85%] m-auto py-2">
        <div>
          <Link to={"/"}>
            <img src="/logo.png" alt="logo" className="h-[80px] w-[190px]" />
          </Link>
        </div>
        <div
          className="ml-auto text-3xl cursor-pointer text-darkBlue md:hidden"
          onClick={() => setShowModal(true)}
        >
          <RxHamburgerMenu />
        </div>
        <ul className="ml-auto hidden items-center gap-6 md:flex">
          {navItems.map((nav, i) => {
            const isActive = location.pathname.startsWith(nav.path);

            return (
              <li
                className={`font-semibold text-xssm ${
                  isActive ? "text-lightBlue" : "hover:text-lightBlue/80"
                } `}
                key={i}
              >
                <Link to={nav.path} className="">
                  {nav.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
