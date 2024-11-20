import { IoReorderThreeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setShowMenu(!showMenu);
  return (
    <nav className="px-20 max-md:px-10 pt-7 flex gap-5 justify-between text-xl items-center">
      <div className="flex gap-2 justify-center items-center">
        <img src="/logo.svg" alt="Edugen" width="90px" height="70px" />
        <h1 className="font-extrabold text-3xl">EduGen</h1>
      </div>
      <div
        className=" flex gap-10 justify-center items-center max-md:hidden
"
      >
        <a href="/" target="_blank" rel="noopener noreferrer">
          Home
        </a>
        <a href="/about" target="_blank" rel="noopener noreferrer">
          About
        </a>
        <a href="/contact" target="_blank" rel="noopener noreferrer">
          Contact
        </a>
      </div>
      <div className=" flex gap-4 justify-center items-center max-sm:hidden">
        <button
          type="button"
          className="bg-blue-800 p-4 text-white rounded-md px-4 "
        >
          <FaSearch />
        </button>
        <button
          type="button"
          className="  bg-blue-800 p-3 text-white rounded-md  px-4"
        >
          Register
        </button>
      </div>
      <div className="flex flex-col items-center md:hidden">
        <div className="max-sm:visible ">
          <IoReorderThreeOutline size={40} onClick={handleClick} />
        </div>
        {showMenu && (
          <div
            className={`flex row gap-10 justify-center items-center transition-all duration-300 ${
              showMenu ? "max-sm:visible" : "hidden"
            }${showMenu ? "visible" : "invisible"} max-sm:visible `}
          >
            <a href="/" target="_blank" rel="noopener noreferrer">
              Home
            </a>
            <a href="/about" target="_blank" rel="noopener noreferrer">
              About
            </a>
            <a href="/contact" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
