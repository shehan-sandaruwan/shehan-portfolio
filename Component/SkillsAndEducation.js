import React, { useRef, useEffect, useState, forwardRef } from "react";
import styles from "../styles/Skills.module.scss";
import Image from "next/image";

const _techStack = [
  {
    name: "JavaScript",
    id: "js",
    logo: "/images/skills/js.png",
    yearsOfExperiance: "Three plus years",
  },
  {
    name: "TypeScript",
    id: "ts",
    logo: "/images/skills/typescript.png",
    yearsOfExperiance: "Six month",
  },
  {
    name: "ReactJs",
    id: "Rjs",
    logo: "/images/skills/atom.png",
    yearsOfExperiance: "One plus years",
  },
  {
    name: "NextJs",
    id: "Njs",
    logo: "/images/skills/next.png",
    yearsOfExperiance: "One plus years",
  },
  {
    name: "CSS/SCSS",
    id: "css",
    logo: "/images/skills/css-3.png",
    yearsOfExperiance: "One plus years",
  },
  {
    name: "HTML5",
    id: "html",
    logo: "/images/skills/html-5.png",
    yearsOfExperiance: "One plus years",
  },
  {
    name: "MySql",
    id: "mysql",
    logo: "/images/skills/mysql.png",
    yearsOfExperiance: "Six Month",
  },
  {
    name: "GitHub",
    id: "github",
    logo: "/images/skills/github.png",
    yearsOfExperiance: "Three plus years",
  },
  {
    name: "MUI",
    id: "mui",
    logo: "/images/skills/github.png",
    yearsOfExperiance: "Three plus years",
  },
];

const SkillsAndEducation = (props) => {
  const techStackRef = useRef(null);
  const educationRef = useRef(null);
  const hacklnRef = useRef(null);
  const hackdevRef = useRef(null);
  const [techStack, setTechStack] = useState(_techStack);

  const [viewPortRef, setViewPortRef] = useState({
    tech: false,
    edu: false,
    hackL: false,
    hackD: false,
  });

  useEffect(() => {
    requestAnimationFrame(calculateLearp);
  }, []);

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

  const calculateLearp = () => {
    techStack.forEach((item) => {
      const element = document.getElementById(item.id);
      let currentPoint = { x: 0, y: 0 };

      if (element?.getBoundingClientRect()) {
        let { x, y } = element?.getBoundingClientRect();
        const targetPoint = { x: x, y: y };
        console.log(targetPoint);

        if (targetPoint.y - currentPoint.y >= 1) {
          currentPoint.x =
            currentPoint.x + (targetPoint.x - currentPoint.x) * 0.5;
          currentPoint.y =
            currentPoint.y + (targetPoint.y - currentPoint.y) * 0.5;
        }
      }

      element?.style.setProperty("--y", currentPoint.y);
    });

    requestAnimationFrame(calculateLearp);
  };

  return (
    <React.Fragment>
      <div className={styles.skillsAndEducation}>
        <div className={styles.techContainer}>
          {/* <canvas id="techItem" ref={techStackRef}></canvas> */}
          {techStack.map((item, index) => {
            return (
              <div key={index} style={{ "--delay": index }} id={item.id}>
                {item.name}
              </div>
            );
          })}
        </div>
        <div className={styles.education}>
          <h1>Education</h1>
          <div className={styles.eductionContainer} ref={educationRef}>
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
          <h1>
            {
              "Although I'm not a tech geek, I think I have a moderately inventive mindset."
            }
          </h1>
          <p>
            Here are some of my university-related memories where we developed
            and competed for the most creative ideas.
          </p>
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
                      "--image-delay": index,
                      backgroundImage: `url(${item.path})`,
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
                      "--image-delay": index,
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
