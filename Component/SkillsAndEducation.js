import React, { useRef, useEffect, useState, forwardRef } from "react";
import styles from "../styles/Skills.module.scss";
import Image from "next/image";

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
  const techStackRef = useRef(null);
  const educationRef = useRef(null);
  const hacklnRef = useRef(null);
  const hackdevRef = useRef(null);

  const [viewPortRef, setViewPortRef] = useState({
    tech: false,
    edu: false,
    hackL: false,
    hackD: false,
  });

  useEffect(() => {
    function handleScroll() {
      console.log(window.innerHeight);
      return setViewPortRef({
        tech:
          techStackRef.current &&
          window.innerHeight -
            techStackRef.current.getBoundingClientRect().bottom >
            20,
        edu:
          educationRef.current &&
          window.innerHeight -
            educationRef.current.getBoundingClientRect().top >
            10,
        hackL:
          hacklnRef.current &&
          window.innerHeight - hacklnRef.current.getBoundingClientRect().top >
            20,
        hackD:
          hackdevRef.current &&
          window.innerHeight - hackdevRef.current.getBoundingClientRect().top >
            20,
      });
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [techStack, educationRef, hackdevRef, hacklnRef]);

  return (
    <React.Fragment>
      <div className={styles.skillsAndEducation}>
        {/* <div className={styles.techContainer}>
          <h1>Technical competency</h1>
          <div className={styles.techItems} ref={techStackRef}>
            {techStack.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    className={styles.techCard}
                    style={{
                      animationName: `${styles.techFitting}`,
                      animationDuration: "3s",
                      animationFillMode: "forwards",
                      animationDelay: `${1 + index / 5}s`,
                    }}
                  >
                    <div className={styles.techCardTop}>
                      <Image
                        src="/images/yellowHeart/right-arrow-icon.svg"
                        width={20}
                        height={20}
                        alt="tech logo"
                      />
                    </div>
                    <div className={styles.techCardBottom}>
                      <label>{item.name}</label>
                      <label>{item.yearsOfExperiance}</label>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div> */}
        <div className={styles.education}>
          <h1>Education</h1>
          <div
            className={styles.eductionContainer}
            ref={educationRef}
            style={{
              animationName: `${viewPortRef.edu ? styles.techFitting : "none"}`,
              animationDelay: "3s",
              animationDuration: "1s",
              animationFillMode: "forwards",
            }}
          >
            <div className={styles.degree}>
              <div className={styles.eduactionDetails}>
                <label>{"B.S Computer Science"}</label>
                <label>{"University of Colombo school of Computing"}</label>
                <label>{"2016 - 2019"}</label>
              </div>
              <a href="/degree-certificate.pdf" target="_blank">
                <div
                  className={styles.degreeImage}
                  style={{
                    backgroundImage:
                      "url('/images/skills/degree-certificate.jpg')",
                  }}
                ></div>
              </a>
            </div>
            <div className={styles.internShip}>
              <div className={styles.eduactionDetails}>
                <label>{"Internship"}</label>
                <label>{"Sysco LABS Sri Lanka"}</label>
                <label>{"2018 september - 2019 march"}</label>
              </div>
              <a
                href="https://docs.google.com/presentation/d/1rcaV6fUe_o3WEJriORK0ByxSHjgocaZPp8VAmdHs2OE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={styles.degreeImage}
                  style={{
                    backgroundImage: "url('/images/skills/Intern.png')",
                  }}
                ></div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.awardsContainerMain}>
          <h1>Awards</h1>
          <AwardsHackLn ref={hacklnRef} isVisible={viewPortRef.hackL} />
          <AwardsDevFest ref={hackdevRef} isVisible={viewPortRef.hackD} />
        </div>
      </div>
    </React.Fragment>
  );
};

const imagesHackLn = [
  {
    path: "/images/hackLn-mail.jpg",
  },
  {
    path: "/images/hackLn-pic-1.JPG",
  },
  {
    path: "/images/hackLn-pic-2.JPG",
  },
];

const imagesDevFest = [
  {
    path: "/images/devFest-cert.png",
  },
  {
    path: "/images/devFest-1.JPG",
  },
  {
    path: "/images/devFest-2.JPG",
  },
];

// eslint-disable-next-line react/display-name
const AwardsHackLn = forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <div className={styles.awardsContainer} ref={ref}>
        <div className={styles.hackLnContainer}>
          <div className={styles.details}>
            <label>HackLN Hackathon held on 2017</label>
            <label>The Best ideas for matches year 3001</label>
            <p>
              Our Solution was <br /> Better Mind, <br />A smartphone
              application that tracks a user&rsquo;s behavior and notifies a
              psychiatrist or a guardian while offering numerous features for
              clearing the mind.
            </p>
          </div>
          <div className={styles.images}>
            {imagesHackLn.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    className={styles.imagesBackground}
                    style={{
                      backgroundImage: `url(${item.path})`,
                      animationDelay: `${1 + index / 3}s`,
                      animationName: `${
                        props.isVisible ? styles.imageFitting : "none"}`,
                      animationDuration: "2s",
                      animationTimingFunction: "linear",
                      animationIterationCount: 1,
                      animationFillMode: "none",
                    }}
                  ></div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});

// eslint-disable-next-line react/display-name
const AwardsDevFest = forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <div className={styles.awardsContainer} ref={ref}>
        <div className={styles.devFestContainer}>
          <div className={styles.details}>
            <label>HACKADEV Hackathon held on 2018</label>
            <label>Innovative Idea for a Sustainable Society</label>
            <p>
              This is an alarm system that operates sequentially and that you
              may use even in the absence of network coverage.
            </p>
          </div>
          <div className={styles.images}>
            {imagesDevFest.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    className={styles.imagesBackground}
                    style={{
                      backgroundImage: `url(${item.path})`,
                      animationDelay: `${1 + index / 3}s`,
                      animationName: `${
                        props.isVisible ? styles.imageFitting : "none"
                      }`,
                      animationDuration: "2s",
                      animationTimingFunction: "linear",
                      animationIterationCount: 1,
                      animationFillMode: "none",
                    }}
                  ></div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});

export default SkillsAndEducation;
