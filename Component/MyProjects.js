import React from "react";
import styles from "../styles/Projects.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    name: "YellowHeart",
    description: "Frontend developer",
    index: 1,
    imageUrl: "/images/yellowHeart/kol-page.png",
    logoUrl: "/images/yellowHeart/logo-mobile.svg",
    background: "linear-gradient(to right,  rgba(255,0,0,0), #ffd100)",
    href: "/project-description/yellowHeart",
    duration: "2021-09 - Present",
  },
  {
    name: "Fancy-Mantis",
    description: "Frontend developer - freelance",
    index: 2,
    imageUrl: "/images/yellowHeart/fancy-mantis.png",
    logoUrl: "/images/yellowHeart/fancy-logo.svg",
    background: "linear-gradient(to right, rgba(255,0,0,0), #2F69FE)",
    href: "/project-description/fancyMantis",
    duration: "2022-04 - Present",
  },
  {
    name: "DFN-Pro-11",
    description: "Frontend developer freelance",
    index: 3,
    imageUrl: "/images/yellowHeart/chart.svg",
    logoUrl: "/images/yellowHeart/dfn-logo.svg",
    background: "linear-gradient(to right, rgba(255,0,0,0), #4DBBEB)",
    href: "/project-description/pro11Chart",
    duration: "2019-03 - 2020-12",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const MyProjects = (props) => {
  return (
    <React.Fragment>
      <motion.div
        className={styles.projectContainer}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className={styles.projectHeader} variants={item}>
          <h1>Projects I Worked on</h1>
        </motion.div>
        <motion.div style={{ width: "100%" }} variants={item}>
          {projects.map((project) => {
            return (
              <React.Fragment key={project.index}>
                <div
                  className={styles.projectItem}
                  style={{ backgroundImage: `${project.background}` }}
                >
                  <div className={styles.details}>
                    <div className={styles.logo}>
                      <Image
                        src={project.logoUrl}
                        width={50}
                        height={50}
                        alt="project logo"
                      />
                    </div>
                    <div className={styles.description}>
                      <h1>{project.name}</h1>
                      <h4>{project.description}</h4>
                      <h4>{project.duration}</h4>
                      <div className={styles.learnMore}>
                        <Link href={project.href}>
                          <a>
                            learn more{" "}
                            <span
                              style={{
                                display: "inline-block",
                                verticalAlign: "middle",
                              }}
                            >
                              <Image
                                src="/images/yellowHeart/right-arrow-icon.svg"
                                width={20}
                                height={20}
                                alt="arrow-right"
                              />
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.projectImages}>
                    <Image
                      src={project.imageUrl}
                      width={500}
                      height={400}
                      alt="project-images"
                    />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
};

export default MyProjects;
