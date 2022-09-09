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
    <DefaultLayout isActive="projects">
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
        <div className={_styles.details}>
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
            <h3>Story about the project</h3>
            <div className={styles.projectDetails}>
              <motion.ul variants={container} initial="hidden" animate="show">
                <motion.li variants={item}>
                  Responsible for creating a Frontend React Application with
                  another backend developer. communicating with the backend
                  developer on Slack. Assigned tasks on Jira to keep track of
                  everything.
                </motion.li>
                <motion.li variants={item}>
                  Responsible for reacting to a modern Dashboard based on the
                  given XD design.
                  <dd>- User Panel</dd>
                  <dd>- Admin Panel</dd>
                </motion.li>
                <motion.li variants={item}>
                  Implemented Sortable/Searchable table component; used general
                  Table component to implement each use cases.
                </motion.li>
                <motion.li variants={item}>
                  Handled AUTH using JWT token system provided by the backend
                  developer
                </motion.li>
                <motion.li variants={item}>
                  Everything broken down into smaller components whenever
                  possible.
                </motion.li>
                <motion.li variants={item}>
                  Collaborating with people in different time zone was a bit
                  challenging, hence we had a regular catch-up to assess the
                  progress and streamline the client&rsquo;s requirements. I was
                  able to work closely with the Backend developer. Having
                  experience working with BE technologies really helped me to
                  get things done as I needed. For instance when the client
                  needs to remove the case sensitivity of the email but we have
                  to showcase the same email which the user included in the
                  front end. BE developer mentioned that it&rsquo;s a bit hard
                  to achieve since he is using NoSQL DB (MongoDB) In light of
                  this, I did some research and came up with a solution that
                  allows us to use regex when searching in MongoDB.
                </motion.li>
                <motion.li variants={item}>
                  I succeeded in learning how to put light-dark mode switching
                  into practice. I was able to learn about many technologies
                  that will make it easier for me to build, including
                  react-timer, react-pdf, framer-motion, and google-chart. Since
                  I am the only frontend developer working on this project, I
                  must implement everything from scratch and choose the
                  appropriate architecture and Technologies. Therefore, it is a
                  big obligation. this project helped me to level up my
                  experience as a front-end developer.
                </motion.li>
              </motion.ul>
              <p>
                <br />
                Technologies used: JavaScript, ReactJs, NextJs, HTML5, SCSS,
                MUI, Next-Auth, Jira, Axios, Firebase
              </p>
            </div>
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
                Previouse <span className="mobile-view">Project</span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/project-description/pro11Chart">
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
      </div>
    </DefaultLayout>
  );
};

export default FancyMantis;
