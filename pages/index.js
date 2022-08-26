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
      <DefaultLayout isActive={isActive}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={styles.mySelfImage}
        >
          <div div className={styles.homePageIntro}>
            <motion.h1 variants={item}>
              Hi I&rsquo;m Shehan, <br />
              Frontend Dveloper. <br />
            </motion.h1>
            <motion.p variants={item}>
              A driven guy with a positive outlook. I don&rsquo;t even strive to
              be flawless since I am not. I think that being imperfect makes you
              feel alive and excited. &#128512; <br />
              Here you can find the detailed overview of my journey as a
              Frontend developer.
            </motion.p>
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
        </motion.div>
      </DefaultLayout>
    </React.Fragment>
  );
}
