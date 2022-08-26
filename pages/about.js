import React, { useEffect, useState } from "react";
import DefaultLayout from "../Component/Layout/DefaultLayout";
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

const About = () => {
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    setIsActive("about");

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
          <div div className={styles.aboutMe}>
            <h1>I serve the world by providing Software Solutions.</h1>
            <h2>I&rsquo;m Shehan Dinuka, but you can call me Shehan</h2>
            <motion.p>
              I was born and raised in Sri Lanka 🇱🇰, <br />
              I&rsquo;ve been working as a professional software Engineer since
              2019, where I started my career as a full stack Engineer, and then
              moved my Major straight to the Front End. I strive to create
              elegant solutions that surprise and delight users, while keeping
              complex technical dependencies in mind for implementation,
              scalability, and developer sanity. <br />
              I&rsquo;ve worked in local and remote agile teams where I actively
              participate to develop front-end features (both UI and Functional
              Implementation). I always challenge my comfort zone and try to
              think out of the box. I have been delivering value added products
              that meets the client needs by working closely with them. There
              was an instance where I challenged myself when I was assigned to
              deliver a Media Player withing 4 days of time. It needed to be a
              responsive, dynamic media player that supported cross-browser
              functionality enabling users to Play All, Download, Play
              Individual Item, pause, and stop video and audio files. I accepted
              the challenge, collaborated with my seniors, and got the required
              support from UI/UX team. In parallel I continuously communicated
              with the Client and got the feedback. Finally, we were able to
              deliver the feature within the given time frame as a team. I was
              able to observe my potential based on the way I handled the
              challenge. <br />
              Therefore, I can assure you that I&rsquo;m responsible adaptable
              and could manage the pressure. No one is perfect in this field
              everything can be done in different ways, but experience leads you
              to choose what&rsquo;s optimum, so keep learning.
              <br />
              -This is what I believe
            </motion.p>
          </div>
        </motion.div>
      </DefaultLayout>
    </React.Fragment>
  );
};

export default About;
