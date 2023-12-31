import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { motion, useAnimate } from "framer-motion";
import { AnimatePresence } from "framer-motion";

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
  const [scope, animate] = useAnimate();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    animate([
      [
        "path.top",
        { d: open ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: open ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: open ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
    ]);
  }, [open]);

  return (
    <nav>
      <div className="logo">
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
      <div ref={scope} className="hamburger">
        <button className="button" onClick={handleClick}>
          <svg width="23" height="18" viewBox="0 0 23 18">
            <path
              fill="transparent"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              d="M 2 2.5 L 20 2.5"
              className="top"
            />
            <path
              fill="transparent"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              d="M 2 9.423 L 20 9.423"
              opacity="1"
              className="middle"
            />
            <path
              fill="transparent"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              d="M 2 16.346 L 20 16.346"
              className="bottom"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};
export default Header;
