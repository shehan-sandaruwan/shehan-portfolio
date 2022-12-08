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
      <div className={styles.projectItems}>
        <a href="http://yh.io/" target="_blank" rel="noreferrer">
          <Image
            width={80}
            height={80}
            src={"/images/yellowHeart/logo-mobile.svg"}
            alt="Yellow Hear Logo"
          ></Image>
        </a>
        <CarouselContainer
          gallery={gallery}
          gradient={"linear-gradient(to bottom,  rgba(255,0,0,0), #ffd100)"}
        />
        <div className={styles.projectDetails}>
          <p>
            Leverage Web3 to revitalize ticketing, empower fans, artists, and
            sports teams. Utilizing the latest and greatest in Web3 technology
          </p>
          <p>
            This online application was created and put into use with the NFT
            market in mind. where customers can buy and sell NFT items. The two
            primary sections of this app are one for users and one for
            administrators, who look after the web application&#8216;s content.
            One of the biggest challenge I face with this application is
            providing an accurate yet appealing platform. Pixel-perfect UI that
            adheres to the Zipline requirement is required. The majority of the
            pages on this dynamic web portal are produced using dynamic data; BE
            integration and data modeling are typical use cases for most
            scenarios.
          </p>
          <ul>
            <li>
              <content>
                Reusable Streaming component where user can play download
                Video/Audio s.
              </content>
            </li>
            <li>
              <content>
                Contract Deployment Automation component where Admin should be
                able to deploy contract seamlessly via this component.
              </content>
            </li>
            <li>
             Implemented Role-based privileges to admin and
              user portal.
            </li>
            <li>
             
              Header banner configuration component where Admin can upload
              images and manage the content.
            </li>
            <li>
              
              UI and Functional implementation of the web pages based on
              Zipline. Those are a few of the major tasks I&#8216;ve carried out
              as my daily duties.
            </li>
            <li>
              I have been assigned to fix prod issues in Our
              YH wallet which is an extension, Implement new UI components, and
              Most importantly resolve the GitHub Security alert issues, which
              popped up due to the version depreciation of some npm packages.
            </li>
          </ul>
          <p>
            I was able to improve my technical competency in ReactJs, JavaScript
            Next JS MUI, and HTML5/SCSS areas. As we worked for a US team with
            an agile ecosystem where I actively participated in most of the
            agile practices. I have engaged with Three amigo sessions, sprint
            planning, retrospective and Jira helped us to streamline the
            requirement and track the progress of the ongoing development. We
            held daily stand-up meetings where we brought up all the
            conversation topics and roadblocks to share with the team and gain
            more clarity.
          </p>
          <p>
            I&#8216;m happy to be a part of this team because it has allowed me
            to advance my profession in a variety of ways. Every time we feel
            that we have anything to contribute to the organization, we are
            always invited to provide our opinions and comments.
          </p>
        </div>
        <div className="go-prev">
          <Link href="/project-description/axsess">
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
              Previouse <label className="mobile-view">Project</label>
            </a>
          </Link>
        </div>
        <div className="go-next">
          <Link href="/project-description/fancyMantis">
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

export default YellowHeart;
