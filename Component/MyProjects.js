import React, { useEffect, useRef, useState } from "react";
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
    logoUrl: "/images/fancy-mantis/logo-mobile.png",
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

const noteWorthyProject = [
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
  const yellowHeart = useRef(null);
  const fancyMantis = useRef(null);
  const dfn = useRef(null);
  const [y, setY] = useState("down");

  useEffect(() => {
    setY(window.scrollY);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  const handleScroll = () => {
    const clientY = window.innerHeight;
    if (yellowHeart.current && fancyMantis.current && dfn.current) {
      const yhY = clientY - calculateBoundryClinet(yellowHeart);
      const fmY = clientY - calculateBoundryClinet(fancyMantis);
      const dfnY = clientY - calculateBoundryClinet(dfn);
      const yhYStat = Math.abs(yhY) >= 300 ? "animate" : "still";
      const fmYState = Math.abs(fmY) >= 300 ? "animate" : "still";
      const dfnYState = Math.abs(dfnY) >= 300 ? "animate" : "still";

      if (yellowHeart.current.dataset.state !== yhYStat) {
        yellowHeart.current.dataset.state = yhYStat;
      }

      if (fancyMantis.current.dataset.state !== fmYState) {
        fancyMantis.current.dataset.state = fmYState;
      }

      if (dfn.current.dataset.state !== dfnYState) {
        dfn.current.dataset.state = dfnYState;
      }
    }

    setY(window.scrollY);
  };

  const calculateBoundryClinet = (ref) => {
    let top = 0;

    top = ref.current.getBoundingClientRect().top;

    return top;
  };

  return (
    <React.Fragment>
      <div className={styles.projectContainer}>
        <div className={styles.projectHeader}>
          <h1>Some Things I&rsquo;ve Built</h1>
        </div>
        <div style={{ width: "100%" }}>
          {projects.map((project, index) => {
            return (
              <React.Fragment key={project.index}>
                <div
                  className={styles.projectItem}
                  ref={
                    project.index === 1
                      ? yellowHeart
                      : project.index === 2
                      ? fancyMantis
                      : dfn
                  }
                >
                  <div
                    className={styles.projectImages}
                    style={{ backgroundImage: `${project.background}` }}
                  >
                    <Image
                      src={project.imageUrl}
                      width={500}
                      height={400}
                      alt="project-images"
                    />
                  </div>
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
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyProjects;
