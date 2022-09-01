import React, { useEffect, useState } from "react";
import DefaultLayout from "../Component/Layout/DefaultLayout";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
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

export default function Home() {
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    setIsActive("home");

    return () => {
      setIsActive("");
    };
  }, []);

  return (
    <React.Fragment>
      <HomePageModal />
      <DefaultLayout isActive={isActive}>
        <div className={styles.mySelfImage}>
          <div div className={styles.homePageIntro}>
            <label>
              <Greetings />
            </label>
            <p>
              A driven guy with a positive outlook. I don&rsquo;t even strive to
              be flawless since I am not. I think that being imperfect makes you
              feel alive and excited. &#128512; <br />
              Here you can find the detailed overview of my journey as a
              Frontend developer.
            </p>
            <div className="learn-more">
              <Link href="/about">
                <a>
                  {" "}
                  Learn more
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
    </React.Fragment>
  );
}

const Greetings = () => {
  const greetings = "Hi I'm Shehan, Frontend Developer";
  return (
    <span>
      {greetings.split("").map(function (char, index) {
        let style = { "animation-delay": 6 + index / 10 + "s" };
        return (
          <>
            <span aria-hidden="true" key={index} style={style}>
              {char}
            </span>
            {index === 13 && <br />}
          </>
        );
      })}
    </span>
  );
};

const HomePageModal = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="top-part"></div>
        <div className="logo">
          <Image
            src="/images/myLogo.svg"
            width={100}
            height={100}
            alt="my-logo"
          />
        </div>
      </div>
    </React.Fragment>
  );
};
