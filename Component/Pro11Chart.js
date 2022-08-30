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
    imageUrl: "/images/pro11/chart-1.png",
    index: 1,
  },
  {
    imageUrl: "/images/pro11/chart-2.png",
    index: 2,
  },
  {
    imageUrl: "/images/pro11/chart-3.png",
    index: 3,
  },
  {
    imageUrl: "/images/pro11/chart-5.png",
    index: 4,
  },
  {
    imageUrl: "/images/pro11/chart-7.png",
    index: 5,
  },
];

const Pro11Chart = () => {
  return (
    <DefaultLayout>
      <div className={styles.goBack}>
        <Link href="/projects">
          <a>
            {" "}
            <span
              style={{
                display: "inline-block",
                verticalAlign: "middle",
              }}
            >
              <Image
                src="/images/yellowHeart/caret-left-icon-16.svg"
                width={20}
                height={20}
                alt="arrow-right"
              />
            </span>
            Projects Page
          </a>
        </Link>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={_styles.projectItem}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,0,0,0), #4DBBEB)",
        }}
      >
        <div
          className={_styles.details}
          style={{ alignItems: "flex-start", display: "block" }}
        >
          <div className={_styles.logo}>
            <Image
              src="/images/yellowHeart/dfn-logo.svg"
              width={50}
              height={50}
              alt="project logo"
            />
          </div>
          <div className={_styles.description}>
            <h1>Pro-11 DirectFn</h1>
            <p>
              lift capital markets by outpacing the advancing financial
              technology landscape. Loaded with a lot of content,
              functionalities &#38; new analytical tools, DirectFN Pro 11 aims
              at greatly enhancing the user experience and simplifying &#38;
              speeding the investment decision making process.
            </p>
            <h3>Story about the project</h3>
            <div className={styles.projectDetails}>
              <ul>
                <li>
                  Responsible for developed and designing Chart core
                  functionalities.
                </li>
                <li>
                  Different assessment elements and methodologies have been
                  developed to aid the stock markets&rsquo; complex
                  decision-making process.
                </li>
                <li>
                  Fixing production issues while also taking part in the
                  application&rsquo;s maintenance process was included in the
                  daily schedule.
                </li>
                <li>
                  Participated in client meetings as a core developer of the
                  Chart to provide visibility of the implemented functionalities
                  and Support clients to understand the process seamlessly.
                </li>
                <li>
                  Dom manipulation, Handling HTML5 canvas, Performance
                  enhancement, and implementation of critical data processing
                  logic were part of my role.
                </li>
              </ul>
              <p>
                <br />
                Technologies used: JavaScript, PixiJs, HTML5, CSS, Jira, Design
                Patterns (Singleton, Decorator, Factory, Observable)
              </p>
            </div>
          </div>
        </div>
        <motion.div variants={item} className={_styles.projectImages}>
          <Image
            src="/images/yellowHeart/chart.svg"
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
              <div className={styles.galleryImagesPro11}>
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
              <ScrollMotion background="#4DBBEB" />
            </React.Fragment>
          );
        })}
        <div className="go-prev">
          <Link href="/project-description/fancyMantis">
            <a>
              {" "}
              <span
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              >
                <Image
                  src="/images/yellowHeart/caret-left-icon-16.svg"
                  width={20}
                  height={20}
                  alt="arrow-right"
                />
              </span>
              Previouse Project
            </a>
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Pro11Chart;
