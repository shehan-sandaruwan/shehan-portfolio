import React from "react";
import DefaultLayout from "./Layout/DefaultLayout";
import _styles from "../styles/Projects.module.scss";
import styles from "../styles/Project.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollMotion from "./Layout/ScrollMotion";
import Link from "next/link";

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

const gallery = [
  {
    imageUrl: "/images/yellowHeart/home-page.png",
    index: 1,
  },
  {
    imageUrl: "/images/yellowHeart/streaming.png",
    index: 2,
  },
  {
    imageUrl: "/images/yellowHeart/header-banner-admin.png",
    index: 3,
  },
  {
    imageUrl: "/images/yellowHeart/asset-contract.png",
    index: 4,
  },
  {
    imageUrl: "/images/yellowHeart/preview.png",
    index: 5,
  },
];

const YellowHeart = () => {
  return (
    <DefaultLayout isActive="projects">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={_styles.projectItem}
        style={{
          backgroundImage:
            "linear-gradient(to right,  rgba(255,0,0,0), #ffd100)",
        }}
      >
        <div className={_styles.details}>
          <div className={_styles.logo}>
            <Image
              src="/images/yellowHeart/logo-mobile.svg"
              width={50}
              height={50}
              alt="project logo"
            />
          </div>
          <div className={_styles.description}>
            <h1>YellowHeart</h1>
            <p>
              YellowHeart leverages Web3 to revitalize ticketing, empower fans,
              artists, and sports teams.
            </p>
            <h3>Story about the project</h3>
            <div className={styles.projectDetails}>
              <motion.ul variants={container} initial="hidden" animate="show">
                <motion.li variants={item}>
                  Implemented web portal UI component by providing more
                  significant attention to the details.
                </motion.li>
                <motion.li variants={item}>
                  I spoke with the client and the business analyst to streamline
                  precise needs. And I raised the concern and the blocker in
                  Product sync to get broader and more sustainable solutions.
                </motion.li>
                <motion.li variants={item}>
                  I was given difficult tasks right away, such as creating a
                  Header banner configuration unit, so I had to adapt quickly
                  and become comfortable with the project. Therefore, it was
                  quite challenging.
                </motion.li>
                <motion.li variants={item}>
                  I had to put in a lot of work to learn CSS/SCSS and HTML5 when
                  I first started working on this project because I didn&rsquo;t
                  have enough expertise with them. So now that I&rsquo;m in this
                  position, I can comfortably use CSS/HTML5, and this experience
                  has been a tremendous addition to my résumé.
                </motion.li>
                <motion.li variants={item}>
                  I was able to use some of the advanced ReactJS
                  functionalities, such as useCallback hooks when using event
                  listeners and React HOC, which allowed me to apply my
                  theoretical knowledge and improve my React skills.
                </motion.li>
                <motion.li variants={item}>
                  Collaboration and communication help move things along faster.
                </motion.li>
              </motion.ul>
              <p>
                <br />
                Technologies used: JavaScript, ReactJs, NextJs, HTML5, SCSS,
                MUI, Zeplin
              </p>
            </div>
          </div>
        </div>
        <motion.div variants={item} className={_styles.projectImages}>
          <Image
            src="/images/yellowHeart/kol-page.png"
            width={500}
            height={400}
            alt="project-images"
          />
        </motion.div>
      </motion.div>
      <div className={styles.gallerySection}>
        <h1>Gallery</h1>
        {gallery.map((item) => {
          return (
            <React.Fragment key={item.index}>
              <div className={styles.galleryImagesYH}>
                <Image
                  src={item.imageUrl}
                  width={800}
                  height={500}
                  alt="yellowHeart-gallery-images"
                />
                <div className={styles.nameAndTitle}>
                  <h3>Frontend Developer</h3>
                  <span>Shehan Dinuka</span>
                </div>
              </div>
              <ScrollMotion background="rgba(240, 179, 10, 0.2)" />
            </React.Fragment>
          );
        })}
        <div className="go-next">
          <Link href="/project-description/fancyMantis">
            <a>
              {" "}
              Next <span className="mobile-view">Project</span>
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
    </DefaultLayout>
  );
};

export default YellowHeart;
