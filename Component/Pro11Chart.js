import React from "react";
import DefaultLayout from "./Layout/DefaultLayout";
import _styles from "../styles/Projects.module.scss";
import styles from "../styles/Project.module.scss";
import Image from "next/image";
import CarouselContainer from "./CarouselContainer";
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
            src={"/images/yellowHeart/dfn-logo.svg"}
            alt="Yellow Hear Logo"
          ></Image>
        </a>
        <CarouselContainer
          gallery={gallery}
          gradient={"linear-gradient(to bottom, rgba(255,0,0,0), #4DBBEB)"}
        />
        <div className={styles.projectDetails}>
          <p>
            Lift capital markets by outpacing the advancing financial technology
            landscape. Loaded with a lot of content, functionalities &#38; new
            analytical tools, DirectFN Pro 11 aims at greatly enhancing the user
            experience and simplifying &#38; speeding the investment
            decision-making process.
          </p>
          <p>
            Responsible for developing and designing Chart core Functionalities.
          </p>

          <ul>
            <li>
              <span>&#9989;</span>
              <content>
                {" "}
                Different assessment elements and methodologies have been
                developed to aid the stock markets&rsquo; complex
                decision-making process.
              </content>
            </li>
            <li>
              <span>&#9989;</span>
              <content>
                Fixing production issues while also taking part in the
                application&rsquo;s maintenance process was included in the
                daily schedule.
              </content>
            </li>
            <li>
              {" "}
              <span>&#9989;</span> Participated in client meetings as a core
              developer of the Chart to provide visibility of the implemented
              functionalities and Support clients to understand the process
              seamlessly.
            </li>
            <li>
              <span>&#9989;</span>
              Dom manipulation, Handling HTML5 canvas, Performance enhancement,
              and implementation of critical data processing was part of my
              role.
            </li>
          </ul>
          <p>
            I worked with Vanilla JS, ES6, HTML5, CSS, and PixiJS library to
            draw charts in HTML canvas. The exposure I gain was paved the path
            to becoming an experienced JS developer today. JavaScript design
            patterns especially factory design pattern decorator patterns and
            Observable are used frequently in this project. As a Junior
            developer, My code is always reviewed by peers and TL. So I was able
            to obtain and figure out lots of technical usage of the most
            theoretical terms and the best and most efficient ways to implement
            things. That taught me a lot.
          </p>
        </div>

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
              Previouse <label className="mobile-view">Project</label>
            </a>
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Pro11Chart;
