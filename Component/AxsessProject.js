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
    imageUrl: "/images/axsess/axsess1.png",
    index: 1,
  },
  {
    imageUrl: "/images/axsess/axsess2.png",
    index: 2,
  },
  {
    imageUrl: "/images/axsess/axsess3.png",
    index: 3,
  },
  {
    imageUrl: "/images/axsess/axsess4.png",
    index: 4,
  },
  {
    imageUrl: "/images/axsess/axsess5.png",
    index: 5,
  },
  {
    imageUrl: "/images/axsess/axsess6.png",
    index: 6,
  },
  {
    imageUrl: "/images/axsess/axsess7.png",
    index: 7,
  },
  {
    imageUrl: "/images/axsess/axsess8.png",
    index: 8,
  },
];

const AxsessProject = () => {
  return (
    <DefaultLayout isActive="projects">
      <div className={styles.projectItems}>
        <a
          href="http://bitorderly.com/home"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            width={60}
            height={60}
            src={"/images/axsess/axsesslogo.png"}
            alt="Axsess logo"
          ></Image>
        </a>
        <CarouselContainer
          gallery={gallery}
          gradient={"linear-gradient(to bottom, rgba(255,0,0,0),  #61a233)"}
        />
        <div className={styles.projectDetails}>
          <p>
          The concept behind this project is one of the most intriguing ones I have ever worked on. In order to make up for the harm that businesses or individuals cause to the environment, this website enables users to invest in green energy or SDG-related projects worldwide. This makes it easier for investors to fund projects connected to the Sustainable Development Goals (SDGs), but more crucially, it enables them to fund green energy startups or programs that cut carbon emissions concurrently with the industries' or corporations' own carbon emissions.
          </p>
          <p>
          So I’m truly glad to collaborate with this opportunity and be the core Front end developer of this project.
        <br />
        This project is NFT-based and all the projects (SDG related) consider assets and we enable to sell or buy those assets via this platform. 
          </p>
          <br />
          <h3>
          The architecture of the project:
          </h3>
          <p>
          The goal of this project is to preserve several Brands. For instance, we might require a platform just for investing in carbon-related initiatives, or we might need one for each of the other SDG-related themes separately. We might even be able to establish multiple platforms with unique branding and functions. A new project will be deployed based on the configuration we provided at the build time, and while this is somewhat similar to CMS, it is handled by the environment configuration files.
          </p>
          <br />
        <h3>My Responsibilities:</h3>
          <ul>
            <li>
              <content> Customize existing functionality to aid different brands' requirements.</content>
            </li>
            <li>
              <content>
              Convert Static HTML pages to responsive and reusable components using React.
              </content>
            </li>
            <li>
            Integrate trading pages with BE APIs and connect to the WS and feed data in real time.
            </li>
            <li>
            Implement new features following Zeplin guidelines.
            </li>
            <li>
             
            Add SEO content to different brands.

            </li>
            <li>
              
            Collaborate With BE developer and the client to discuss new features
            </li>
          </ul>
          <p>
          This is a Startup project and only four people are working here BE developer, Dev-ops, a Client, and me (as a Front end developer).
          </p>
        </div>
        <div className="go-next">
          <Link href="/project-description/yellowHeart">
            <a>
              {" "}
              <span
                style={{
                  display: "block",
                  verticalAlign: "middle",
                }}
              ></span>
              Next <label className="mobile-view">Project</label>
              <Image
                src="/images/yellowHeart/right-arrow-icon.svg"
                width={20}
                height={20}
                alt="arrow-left"
              />
            </a>
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AxsessProject;
