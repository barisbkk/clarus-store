import React from "react";
import logo from "../assets/logo.png";
import { closeNavbar, openNavbar, logoutIcon } from "../helper/icons";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-navbarColor md:text-sm">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <a
            href="https://clarusway.com/"
            target="true"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img src={logo} width={50} height={50} alt="Clarusway" />
            <span className="text-gray-700 hover:text-gray-900 font-medium">
              Clarusway
            </span>
          </a>
          {/**iconu md ekranlardan sonra gizlensin diyoruz */}
          <div className="md:hidden">
            <button className="menu-btn text-gray-500 hover:text-gray-800">
              {closeNavbar} {openNavbar}
            </button>
          </div>
        </div>
        <div className="flex flex-col pb-2 flex-1 items-center md:flex md:flex-row">
          <ul className="space-y-6 md:flex md:space-x-6 md:space-y-0">
            <li className="text-gray-700 font-medium  flex justify-center">
              {/* state true olduğunda linkleri ortalamk için */}
              <NavLink
                to="/"
                className={`block hover:bg-main rounded-full py-2 px-4 hover:text-white`}
              >
                "title"
              </NavLink>
            </li>
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <NavLink
              to="/"
              className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium text-gray-700 hover:bg-main hover:text-white active:bg-gray-900 rounded-full md:inline-flex"
            >
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
