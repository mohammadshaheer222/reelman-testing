import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";

const Sidebar = ({ isOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    sliding: false,
    wedding: false,
    instagram: false,
  });

  const toggleDropdown = (dropdownName) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName], 
    }));
  };

  return (
    <div
      className={`h-full w-1/2 sm:w-[40%] md:w-[20%] pt-14 px-8 fixed top-5 bg-gray-200 ${
        isOpen
          ? "left-0 transition-all duration-500"
          : "-left-[50rem] transition-all duration-500 "
      }`}
    >
      {isOpen && (
        <div className="flex flex-col gap-10 text-lg">
          <div className={`relative ${isDropdownOpen.sliding && "h-24"}`}>
            <button
              className="flex items-center gap-x-2 focus:outline-none"
              onClick={() => toggleDropdown("sliding")}
            >
              <MdHome />
              Sliding
            </button>
            {isDropdownOpen.sliding && (
              <div className="absolute top-0 left-0 mt-10 bg-white border border-gray-200 shadow-md">
                <Link
                  to="/reelman-admin/add-slide"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Add Slide
                </Link>
                <Link
                  to="/reelman-admin/list-slide"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  List Slide
                </Link>
              </div>
            )}
          </div>


          <div className={`relative ${isDropdownOpen.wedding && "h-24"}`}>
            <button
              className="flex items-center gap-x-2 focus:outline-none"
              onClick={() => toggleDropdown("wedding")}
            >
              <MdHome />
              Wedding
            </button>
            {isDropdownOpen.wedding && (
              <div className="absolute top-0 left-0 mt-10 bg-white border border-gray-200 shadow-md">
                <Link
                  to="/add-photos"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Add Photos
                </Link>
                <Link
                  to="/list-photos"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  List Photos
                </Link>
              </div>
            )}
          </div>


          <div className={`relative ${isDropdownOpen.instagram && "h-24"}`}>
            <button
              className="flex items-center gap-x-2 focus:outline-none"
              onClick={() => toggleDropdown("instagram")}
            >
              <MdHome />
              Instagram
            </button>
            {isDropdownOpen.instagram && (
              <div className="absolute top-0 left-0 mt-10 bg-white border border-gray-200 shadow-md">
                <Link
                  to="/add-photos"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Add Photos
                </Link>
                <Link
                  to="/list-photos"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  List Photos
                </Link>
              </div>
            )}
          </div>
          <Link className="flex items-center gap-x-2">
            <MdHome />
            Sliding
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
