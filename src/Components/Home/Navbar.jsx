import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    window.scrollY >= 90 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeColor);

  const openMenu = () => {
    setIsOpen(!isOpen);
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
        delay: 0.8,
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
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.8,
      },
    },
  };
  return (
    <div className="text-gray-300 ">
      <motion.nav
        variants={navbarVariant}
        initial="hidden"
        animate="visible"
        className={`flex items-center justify-between px-8 py-2 fixed left-0 right-0 top-0 z-20 ${
          color ? "bg-white" : "bg-none"
        }`}
      >
        <h1 className="uppercase">logo</h1>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/7561847879"
            className="font-medium text-sm tracking-wide cursor-pointe"
          >
            [LET'S CHAT]
          </a>
          <p
            onClick={openMenu}
            className="font-medium text-sm tracking-wide cursor-pointer"
          >
            {isOpen ? "[CLOSE]" : "[MENU]"}
          </p>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobNavVariant}
            exit="exit"
            initial="hidden"
            animate="visible"
            className="bg-white font-semibold tracking-wider flex flex-col items-center justify-center h-screen gap-10 fixed left-0 right-0 top-0 z-10 md:text-lg"
          >
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
            <Link to="/works" onClick={closeMenu}>
              Works
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Navbar;
