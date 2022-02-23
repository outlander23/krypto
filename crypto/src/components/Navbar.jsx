import { useState } from "react";
import logo from "../../images/logo.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const navItems = ["Market", "Exchange", "Tutorials", "wallets"];

const NavItem = ({ title, classprops }) => {
  return <li className={` ${classprops}`}>{title}</li>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer " />
      </div>
      <div className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <ul className="flex">
          {navItems.map((item, index) => {
            return (
              <NavItem key={index} title={item} classprops="text-white mx-2" />
            );
          })}
        </ul>
      </div>
      <div className="flex relative">
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                  flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {navItems.map((item, index) => {
              return (
                <NavItem
                  key={index}
                  title={item}
                  classprops="text-white my-2 text-lg px-2"
                />
              );
            })}
          </ul>
        )}
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
