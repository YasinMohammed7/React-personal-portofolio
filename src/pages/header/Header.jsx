import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { motion, useAnimate } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Hamburger from "../../components/Hamburger";

const navItems = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/projects",
    text: "Projects",
  },
  {
    id: 4,
    path: "/contact",
    text: "Contact",
  },
];

const Header = ({ width }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="logo" data-testid="logo">
        <Link to="/">
          <h2>YM</h2>
        </Link>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.ul
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 0.3,
            }}
            className="menu"
            data-testid="menu"
          >
            {navItems.map(({ path, id, text }) => (
              <motion.li
                initial={{ opacity: 0, y: 70, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                key={id}
                className="menu-item"
              >
                <Link to={path} aria-label={`Go to ${text}`}>
                  <h5>{text}</h5>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        ) : width > 600 ? (
          <ul className="menu">
            {navItems.map(({ path, id, text }) => (
              <li key={id} className="menu-item">
                <Link to={path} aria-label={`Go to ${text}`}>
                  <h5>{text}</h5>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </AnimatePresence>
      {width < 600 && <Hamburger open={open} handleClick={handleClick} />}
    </nav>
  );
};
export default Header;
