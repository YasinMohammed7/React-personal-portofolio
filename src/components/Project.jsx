import React from "react";
import { Link } from "react-router-dom";

const Project = ({ path, img, title, imgStyle, spanStyle }) => {
  return (
    <Link className="card column" to={path}>
      <img className={imgStyle} src={img} alt="project" />
      <p>
        <span className={spanStyle}>&lt;</span>
        {title}
        <span className={spanStyle}> /&gt;</span>
      </p>
    </Link>
  );
};

export default Project;
