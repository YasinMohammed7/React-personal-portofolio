import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Project = ({ path, img, title, spanStyle, buttonStyle }) => {
  return (
    <Link className="card column" to={path}>
      <img src={img} alt="project" />
      <p>
        <span className={spanStyle}>&lt;{title} /&gt;</span>
        <button className={`${buttonStyle} button`}>
          View <IoIosArrowDown />
        </button>
      </p>
    </Link>
  );
};

export default Project;
