import React from "react";
import styles from "../styles/Skills.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const techStack = [
  {
    name: "JavaScript",
    logo: "/images/skills/js.png",
    yearsOfExperiance: "Three plus years",
  },
  {
    name: "TypeScript",
    logo: "/images/skills/typescript.png",
    yearsOfExperiance: "Six month",
  },
  {
    name: "ReactJs",
    logo: "/images/skills/atom.png",
    yearsOfExperiance: "One plus years",
  },
  {
    name: "NextJs",
    logo: "/images/skills/next.png",
    yearsOfExperiance: "One plus years",
  },
  {
    name: "CSS/SCSS",
    logo: "/images/skills/css-3.png",
    yearsOfExperiance: "One plus years",
  },
  {
    name: "HTML",
    logo: "/images/skills/html-5.png",
    yearsOfExperiance: "One plus years",
  },
  {
    name: "MySql",
    logo: "/images/skills/mysql.png",
    yearsOfExperiance: "Six Month",
  },
  {
    name: "GitHub",
    logo: "/images/skills/github.png",
    yearsOfExperiance: "Three plus years",
  },
];

const SkillsAndEducation = (props) => {
  return (
    <React.Fragment>
      <div className={styles.skillsAndEducation}>
        <h1>Technical competency</h1>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={styles.techItems}
        >
          {techStack.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  className={styles.techCard}
                >
                  <div className={styles.techCardTop}>
                    <Image
                      src={item.logo}
                      width={50}
                      height={50}
                      alt="tech logo"
                    />
                  </div>
                  <div className={styles.techCardBottom}>
                    <label>{item.name}</label>
                    <label>{item.yearsOfExperiance}</label>
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </motion.div>
        <div className={styles.education}>
          <h1>Education</h1>
          <div className={styles.eductionContainer}>
            <div className={styles.degree}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                className={styles.degreeImage}
                style={{
                  backgroundImage:
                    "url('/images/skills/degree-certificate.jpg')",
                }}
              >
                <a
                  className={styles.layer}
                  href="/degree-certificate.pdf"
                  target="_blank"
                ></a>
              </motion.div>
              <div className={styles.techCardBottom}>
                <label>{"B.S Computer Science"}</label>
                <label>{"University of Colombo school of Computing"}</label>
                <label>{"2016 - 2019"}</label>
              </div>
            </div>
            <div className={styles.degree}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                className={styles.degreeImage}
                style={{
                  backgroundImage: "url('/images/skills/Intern.png')",
                }}
              >
                <a
                  className={styles.layer}
                  href="https://docs.google.com/presentation/d/1rcaV6fUe_o3WEJriORK0ByxSHjgocaZPp8VAmdHs2OE/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </motion.div>
              <div className={styles.techCardBottom}>
                <label>{"Internship"}</label>
                <label>{"Sysco LABS Sri Lanka"}</label>
                <label>{"2018 september - 2019 march"}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SkillsAndEducation;
