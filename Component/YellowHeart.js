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
            "linear-gradient(to right,  rgba(255,0,0,0), #ffd100)",
        }}
      >
        <div
          className={_styles.details}
          style={{ alignItems: "flex-start", display: "block" }}
        >
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
            <h3>Duties</h3>
            <ul>
              <li>
                Implemented web portal UI component by providing more
                significant attention to the details.
              </li>
              <li>
                I spoke with the client and the business analyst to streamline
                precise needs. And I raised the concern and the blocker in
                Product sync to get broader and more sustainable solutions.
              </li>
              <li>
                I accelerated the development of critical quick-delivery
                features, including the media streaming component, the contract
                deployment admin function, and the customizable Header banner
                configuration modules.
              </li>
              <li>
                Collaboration and communication help move things along faster.
              </li>
            </ul>
            <p>
              Technologies used: JavaScript, ReactJs, NextJs, HTML5, SCSS, MUI
            </p>
            <p>
              Tags: #Responsive #cross-browser #mixins #Agile-mindset
              #GitFlow-WorkFlow
            </p>
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
    </DefaultLayout>
  );
};

export default YellowHeart;
