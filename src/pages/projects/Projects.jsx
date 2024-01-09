import React from "react";
import todoImg from "../../assets/TodoListproject.png";
import converterImg from "../../assets/converterProject.png";
import blogImg from "../../assets/projectImg.png";
import styles from "./Projects.module.css";
import Project from "../../components/Project";

export const projects = [
  {
    id: 1,
    title: "Todo List",
    img: todoImg,
    path: "https://stunning-lamington-05f71d.netlify.app/",
  },
  {
    id: 2,
    title: "Roman Converter",
    img: converterImg,
    path: "https://taupe-sorbet-9b0d3c.netlify.app/",
  },
  {
    id: 3,
    title: "Blog",
    img: blogImg,
    path: "https://magnificent-pika-e1ba95.netlify.app/",
  },
];
const Projects = () => {
  return (
    <section className={styles.section} data-testid="section">
      <h1>My projects</h1>
      {projects.map(({ id, title, img, path }) => (
        <Project
          key={id}
          title={title}
          img={img}
          path={path}
          imgStyle={styles.projectImg}
          spanStyle={styles.code}
        />
      ))}
    </section>
  );
};

export default Projects;
