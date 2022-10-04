import React from "react";
import DefaultLayout from "./Layout/DefaultLayout";
import _styles from "../styles/Projects.module.scss";
import styles from "../styles/Project.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollMotion from "./Layout/ScrollMotion";
import Link from "next/link";
import CarouselContainer from "./CarouselContainer";

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
    imageUrl: "/images/fancy-mantis/ss1.png",
    index: 1,
  },
  {
    imageUrl: "/images/fancy-mantis/ss12.png",
    index: 2,
  },
  {
    imageUrl: "/images/fancy-mantis/ss3.png",
    index: 3,
  },
  {
    imageUrl: "/images/fancy-mantis/registration.png",
    index: 4,
  },
  {
    imageUrl: "/images/fancy-mantis/admin-invoice.png",
    index: 5,
  },
  {
    imageUrl: "/images/fancy-mantis/ss4.png",
    index: 6,
  },
  {
    imageUrl: "/images/fancy-mantis/ss5.png",
    index: 6,
  },
];

const FancyMantis = () => {
  return (
    <DefaultLayout isActive="projects">
      <div className={styles.projectItems}>
        <a
          href="https://fancy-mantis-client.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            width={60}
            height={40}
            src={"/images/fancy-mantis/logo-mobile.png"}
            alt="Yellow Hear Logo"
          ></Image>
        </a>
        <CarouselContainer
          gallery={gallery}
          gradient={"linear-gradient(to bottom, rgba(255,0,0,0), #2F69FE)"}
        />
      </div>
    </DefaultLayout>
  );
};

export default FancyMantis;
