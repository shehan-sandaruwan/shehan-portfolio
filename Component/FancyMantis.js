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
            height={60}
            src={"/images/fancy-mantis/logo-mobile.png"}
            alt="Yellow Hear Logo"
          ></Image>
        </a>
        <CarouselContainer
          gallery={gallery}
          gradient={"linear-gradient(to bottom, rgba(255,0,0,0), #2F69FE)"}
        />
        <div className={styles.projectDetails}>
          <p>
            Leverage Web3 to revitalize ticketing, empower fans, artists, and
            sports teams. Utilizing the latest and greatest in Web3 technology
          </p>
          <p>
            Fancy Mantis is my first contract with The Upwork freelancing
            platform which is not just a contract but also a result of my
            continued contribution and perseverance. This contract is one of my
            proud moments. First I have to submit a proposal (in which 100
            developers are bidding simultaneously). And Then I had to pitch
            related work and convinced the client I&#8216;m not just capable of
            Implementing what they need. Still, also I can communicate well,
            resourcefulness and the Analytical skills I have obtained should be
            present within that 5 - 6 mins in initial streaming.
          </p>
          <p>
            Here you can find the job posting{" "}
            <a
              href="https://www.upwork.com/jobs/~0168739508ba73d98f"
              alt="Job posting link"
            >
              Link.
            </a>
          </p>
          <p>
            I was the only FE developer and I was responsible for designing and
            developing each and every piece of this project.
          </p>
          <p>
            Fancy mantis is an online platform that consists of the service
            providers and the consumer. Fancy mantis provides a user and admin
            dashboard.
          </p>
          <ol>
            <li> User to engage with the clients.</li>
            <li>Admin to manage the daily operation of the whole process.</li>
          </ol>
          <ul>
            <li>
              <span>&#9989;</span>
              <content>Secure login - Used Next-Auth library and JWT.</content>
            </li>
            <li>
              <span>&#9989;</span>
              <content>
                Invoices contract and report generation capabilities.
              </content>
            </li>
            <li>
              {" "}
              <span>&#9989;</span>Change the Status of the User, Contract,
              Invoice, etc.
            </li>
            <li>
              <span>&#9989;</span>
              Add and Update user bank details.
            </li>
            <li>
              <span>&#9989;</span>
              Create email templates.
            </li>
            <li>
              <span>&#9989;</span>
              Arrange data in a tabular view for easy monitoring.
            </li>
            <li>
              <span>&#9989;</span>
              Capabilities to Switch between Dark and Light themes.
            </li>
          </ul>
          <p>
            These functionalities.
            <br /> Apart from That, I Store files in Firebase storage, deploy
            applications in Vercel and Regular communication with the client and
            peer developers. Are consists of my daily routine.
          </p>
        </div>
        <div className="go-prev">
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
              Previouse <label className="mobile-view">Project</label>
            </a>
          </Link>
        </div>
        <div className="go-next">
          <Link href="/project-description/pro11Chart">
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

export default FancyMantis;
