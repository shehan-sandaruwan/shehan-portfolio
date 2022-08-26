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
    imageUrl: "/images/fancy-mantis/admin-invoice.png",
    index: 1,
  },
  {
    imageUrl: "/images/fancy-mantis/admin-template.png",
    index: 2,
  },
  {
    imageUrl: "/images/fancy-mantis/admin.png",
    index: 3,
  },
  {
    imageUrl: "/images/fancy-mantis/registration.png",
    index: 4,
  },
  {
    imageUrl: "/images/fancy-mantis/form.png",
    index: 5,
  },
];

const FancyMantis = () => {
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
            "linear-gradient(to right, rgba(255,0,0,0), #2F69FE)",
        }}
      >
        <div
          className={_styles.details}
          style={{ alignItems: "flex-start", display: "block" }}
        >
          <div className={_styles.logo}>
            <Image
              src="/images/yellowHeart/fancy-logo.svg"
              width={50}
              height={50}
              alt="project logo"
            />
          </div>
          <div className={_styles.description}>
            <h1>Fancy Mantis</h1>
            <p>
              Web application to bridge the gap between IT service providers and
              consumers, offering the advanced capability to manage and monitor
              regular operations.
            </p>
            <h3>Duties</h3>
            <ul>
              <li>
                Responsible for creating a Frontend React Application with
                another backend developer. communicating with the backend
                developer on Slack. Assigned tasks on Jira to keep track of
                everything.
              </li>
              <li>
                Responsible for reacting to a modern Dashboard based on the
                given XD design.
                <li>- User Panel</li>
                <li>- Admin Panel</li>
              </li>
              <li>
                Implemented Sortable/Searchable table component; used General
                Table componenet to implement each use cases.
              </li>
              <li>
                Handled AUTH using JWT token system provided by the backend
                developer
              </li>
              <li>
                Everything broken down into smaller components whenever
                possible.
              </li>
            </ul>
            <p>
              Technologies used: JavaScript, ReactJs, NextJs, HTML5, SCSS, MUI,
              Next-Auth, Jira, Axios
            </p>
            <p>
              Tags: #Responsive #cross-browser #mixins #Agile-mindset
              #GitFlow-WorkFlow
            </p>
          </div>
        </div>
        <motion.div variants={item} className={_styles.projectImages}>
          <Image
            src="/images/yellowHeart/fancy-mantis.png"
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
              <div className={styles.galleryImagesFM}>
                <Image
                  src={item.imageUrl}
                  width={800}
                  height={500}
                  alt="fancy-mantis-gallery-images"
                />
                <div className={styles.nameAndTitle}>
                  <h3>Frontend Developer</h3>
                  <span>Shehan Dinuka</span>
                </div>
              </div>
              <ScrollMotion background="#2F69FE" />
            </React.Fragment>
          );
        })}
        <div className="go-next-prev">
          <div>
            <Link href="/project-description/yellowHeart">
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
          <div>
            <Link href="/project-description/pro11Chart">
              <a>
                {" "}
                Next Project
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
    </DefaultLayout>
  );
};

export default FancyMantis;
