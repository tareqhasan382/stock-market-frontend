import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="max-w-[1280px] mx-auto overflow-x-hidden">
      <div className=" px-5 flex items-center justify-between py-5 relative">
        <div className="flex items-center justify-center md:space-x-10 lg:space-x-20 ">
          <div className="font-semibold text-2xl">
            <Link to="/">
              <h1 className=" gradient-text text-transparent text-3xl font-bold pulse-animation">
                Stock Merket
              </h1>
            </Link>
          </div>
        </div>

        <div className=" flex items-center space-x-2">
          <nav className=" max-md:hidden flex flex-row items-center  ">
            <ul className="flex items-center space-x-3  font-semibold text-[15px]">
              <li>
                <Link
                  to="/"
                  className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                >
                  Portfolio
                </Link>
              </li>
              <li
                className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full cursor-pointer `}
              >
                Share
              </li>
              <li>
                <Link
                  to="/"
                  className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                >
                  News
                </Link>
              </li>
              <li
                className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full cursor-pointer `}
              >
                Signin
              </li>
            </ul>
          </nav>

          <span
            onClick={() => setShowNav(!showNav)}
            className="p-[9px] bg-black rounded-md md:hidden"
          >
            {showNav ? (
              <AiOutlineClose
                size={30}
                className="transition ease-in duration-150"
              />
            ) : (
              <CiMenuBurger
                size={30}
                className="transition ease-in duration-150"
              />
            )}
          </span>
        </div>
      </div>
      <div
        className={`md:hidden ${showNav ? "block rounded-lg" : "hidden"}`}
        style={{ maxWidth: "100vw", overflowX: "hidden" }}
      >
        <ul className=" flex flex-col text-[15px] py-2 ">
          <li className=" mx-5 hover:bg-white hover:text-black hover:duration-75  rounded-full py-1 cursor-pointer ">
            <span className=" px-5 ">About</span>
          </li>
          <Link to="/">
            <li className=" mx-5 hover:bg-white hover:text-black hover:duration-75  rounded-full py-1 cursor-pointer ">
              <span className=" px-5 ">Protfolio</span>
            </li>
          </Link>

          <Link to="/">
            <li className=" mx-5 hover:bg-white hover:text-black hover:duration-75 rounded-full py-1 cursor-pointer ">
              <span className=" px-5 ">Share</span>
            </li>
          </Link>
          <Link to="/">
            <li className=" mx-5 hover:bg-white hover:text-black hover:duration-75 rounded-full py-1 cursor-pointer ">
              <span className=" px-5 ">News</span>
            </li>
          </Link>

          <Link to="/">
            <li className=" mx-5 hover:bg-white hover:text-black hover:duration-75 rounded-full py-1 cursor-pointer ">
              <span className=" px-5 ">Signin</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
