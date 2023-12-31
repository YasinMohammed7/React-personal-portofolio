import React from "react";
import styles from "./About.module.scss";
import Card from "../../components/Card";
import passionImg from "../../assets/passionImg.jpg";
import icon2 from "../../assets/icon2.png";
const About = () => {
  return (
    <section className={styles.section}>
      <Card
        cls={styles.image}
        image={passionImg}
        showIcon={false}
        showInfo={false}
        altText="Passion image"
      />
      <h1 className={styles.title}>Self Summary</h1>
      <Card
        cls={styles.aboutMe}
        image={icon2}
        showIcon={false}
        altText="Icon"
        title="Description"
        desc="My name is Yasin, I am 23 years old and I live in
      Bucharest, Romania.
      I am a front-end developer with a passion for creating engaging and user-friendly web experiences. Seeking a challenging position that allows me to utilize my expertise in frontend technologies and design principles to contribute to the development of innovative and visually appealing websites and applications. 
      One of my hobbies is to play football, it makes me creative and gives me motivation to practice coding for making progress."
      />
      <div className={styles.experience} style={{ backgroundColor: "yellow" }}>
        4
      </div>
      <div className={styles.education} style={{ backgroundColor: "orange" }}>
        5
      </div>
    </section>
  );
};

export default About;
