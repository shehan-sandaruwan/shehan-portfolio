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
  const internShipRef = useRef(null);
  const educationRef = useRef(null);
  const awardRef = useRef(null);
  const hacklnRef = useRef(null);
  const hackdevRef = useRef(null);
  const [techStack, setTechStack] = useState(_techStack);

  const [viewPortRef, setViewPortRef] = useState({
    edu: false,
    intern: false,
    award: false,
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
        edu:
          educationRef.current &&
          window.innerHeight -
            educationRef.current.getBoundingClientRect().top >
            100,
        intern:
          internShipRef.current &&
          window.innerHeight -
            internShipRef.current.getBoundingClientRect().top >
            100,
        award:
          awardRef.current &&
          window.innerHeight - awardRef.current.getBoundingClientRect().top >
            100,
        hackL:
          hacklnRef.current &&
          window.innerHeight - hacklnRef.current.getBoundingClientRect().top >
            100,
        hackD:
          hackdevRef.current &&
          window.innerHeight - hackdevRef.current.getBoundingClientRect().top >
            100,
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
        <div
          className={styles.education}
          ref={educationRef}
          data-edu={viewPortRef.edu ? "visible" : "invisible"}
        >
          <h1>
            A quality education will always be a compass to guide one in the
            right direction.
          </h1>
          <p>You can find the proof right here.</p>
          <div
            className={styles.eductionContainer}
            data-edu={viewPortRef.edu ? "visible" : "invisible"}
          >
            <p>
              The University of Colombo School of Computing provided me with a
              solid grounding in computer science.
            </p>
            <div className={styles.degreePic}>
              <div className={styles.degDetails}>
                <label>{"B S Computer Science"}</label>
                <label>{"2016 - 2019"}</label>
                <a href="/degree-certificate.pdf" target="_blank">
                  Degree certificate
                </a>
              </div>
              <Image
                src="/images/degree-cert.jpeg"
                width={400}
                height={300}
                alt="degree certification picture"
              />
            </div>
            <div
              className={styles.internShip}
              ref={internShipRef}
              data-intern={viewPortRef.intern ? "visible" : "invisible"}
            >
              <p>
                I had the good fortune to complete my internship at the most
                well-known tech company in Sri Lanka, where I got my first taste
                of the professional tech sector.
              </p>
              <div className={styles.degreePic}>
                <Image
                  src="/syscoLabs.png"
                  width={200}
                  height={200}
                  alt="sysco image"
                />
                <div className={styles.degDetails}>
                  <label>{"Sysco LABS Sri Lanka"}</label>
                  <label>{"2018 september - 2019 march"}</label>
                  <a
                    href="https://docs.google.com/presentation/d/1rcaV6fUe_o3WEJriORK0ByxSHjgocaZPp8VAmdHs2OE/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Internship Experiance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.awardsContainerMain}
          ref={awardRef}
          data-award={viewPortRef.award ? "visible" : "invisible"}
        >
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
        <div
          className={styles.hackLnContainer}
          data-hackLn={props.isVisible ? "visible" : "invisible"}
        >
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

// eslint-disable-next-line react/display-name
const AwardsDevFest = forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <div className={styles.awardsContainer} ref={ref}>
        <div
          className={styles.devFestContainer}
          data-hackdev={props.isVisible ? "visible" : "invisible"}
        >
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
