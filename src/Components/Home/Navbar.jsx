import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    window.scrollY >= 90 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeColor);

  const openMenu = () => {
    setIsOpen(!isOpen);
    // if (!isOpen) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "unset";
    // }
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const navbarVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 5,
      },
    },
  };
  const mobNavVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.4,
      },
    },
  };
  return (
    <div
      className={`${isOpen && "text-gray-900"} ${
        color ? " text-gray-900" : " text-gray-300"
      }`}
    >
      <motion.nav
        variants={navbarVariant}
        initial="hidden"
        animate="visible"
        className={`flex items-center justify-between md:justify-around px-8 py-2 fixed left-0 right-0 top-0 z-20 ${
          color ? "bg-white" : "bg-none"
        }`}
      >
        <Link to="/" className="uppercase cursor-pointer">
          logo
        </Link>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/7561847879?text=Hello"
            className="font-medium text-sm tracking-wide cursor-pointer block md:hidden"
          >
            [LET'S CHAT]
          </a>
          <p
            onClick={openMenu}
            className="font-medium tracking-wide cursor-pointer block md:hidden"
          >
            {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </p>
        </div>

        {/* desktop */}
        <div className="hidden md:flex md:items-center  md:gap-x-10 font-medium text-lg uppercase">
          <Link to="/" className="hover:text-gray-400 " onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400" onClick={closeMenu}>
            About
          </Link>
          <Link
            to="/wedding"
            className="hover:text-gray-400"
            onClick={closeMenu}
          >
            Wedding
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-400"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <a
            href="https://wa.me/7561847879?text=Hello"
            className="font-medium hover:text-gray-400 text-lg tracking-wide cursor-pointer hiddeb md:block"
          >
            [LET'S CHAT]
          </a>
        </div>
      </motion.nav>

      {/* mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobNavVariant}
            exit="exit"
            initial="hidden"
            animate="visible"
            className="bg-white  md:hidden font-semibold tracking-wider flex flex-col items-center justify-center h-screen gap-10 fixed left-0 right-0 top-0 z-10 md:text-lg "
          >
            <Link to="/" className="hover:text-gray-600" onClick={closeMenu}>
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-600"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/wedding"
              className="hover:text-gray-600"
              onClick={closeMenu}
            >
              Wedding
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-600"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <Outlet />
    </div>
  );
};
export default Navbar;
