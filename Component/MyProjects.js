import React from "react";
import styles from "../styles/Projects.module.scss";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "YellowHeart",
    description: "Frontend developer",
    index: 1,
    imageUrl: "/images/yellowHeart/kol-page.png",
    logoUrl: "/images/yellowHeart/logo-mobile.svg",
    background: "linear-gradient(to right,  rgba(255,0,0,0), #ffd100",
    href: "/projects/yellowHert",
  },
  {
    name: "Fancy-Mantis",
    description: "",
    index: 2,
    imageUrl: "/images/yellowHeart/fancy-mantis.png",
    logoUrl: "/images/yellowHeart/logo-mobile.svg",
    background: "linear-gradient(to right, rgba(255,0,0,0), #2F69FE)",
    href: "/projects/fancyMantis",
  },
];

const MyProjects = (props) => {
  return (
    <React.Fragment>
      <div className={styles.projectContainer}>
        <div className={styles.projectHeader}>
          <h1>Projects I Worked on</h1>
        </div>
        <div style={{ width: "100%" }}>
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyProjects;
