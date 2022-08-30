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
            <h1>I create things for the web.</h1>
            <h2>I&rsquo;m Shehan Dinuka &#128522; </h2>
            <motion.p>
              I was born and raised in Sri Lanka 🇱🇰, <br />
              I&rsquo;ve been working as a professional software Engineer since
              2019 when I started my career as a full stack Engineer and then
              moved my Major straight to the Front End. I strive to create
              elegant solutions that surprise and delight users while keeping
              complex technical dependencies in mind for implementation,
              scalability, and developer sanity. <br />
              I&rsquo;ve worked in local and remote agile teams where I actively
              participate in developing front-end features (both UI and
              Functional Implementation). I always challenge my comfort zone and
              try to think out of the box. I have been delivering value-added
              products that meet client needs by working closely with them.{" "}
              <br />
              <br />
              There was an instance where I challenged myself when I was
              assigned to deliver a Media Player within 4 days. It needed to be
              a responsive, dynamic media player that supported cross-browser
              functionality enabling users to Play All, Download, Play
              Individual items, pause, and stop video and audio files. I
              accepted the challenge, collaborated with my seniors, and got the
              UI/UX team required support. In parallel, I continuously
              communicated with the Client and got feedback. Finally, we were
              able to deliver the feature within the given time frame as a team.
              I was able to observe my potential based on the way I handled the
              challenge. <br />
              <br />
              Therefore, I can assure you that I&rsquo;m accountable, flexible,
              and capable of handling pressure. These are not merely empty
              words. I am conscious of how important these words are. Looking
              back, I can see that my journey was rigorous. I grew up in a
              village where no one knew anything about computer programming. But
              I always pushed my boundaries. It&rsquo;s a lengthy tale, and
              I&rsquo;m very appreciative that I have one to tell.
              <br />
              <br />
              In five years, I need to be a software solution architect, a
              participant in an environmental conservation program, and someone
              who raises awareness of the value of protecting the planet&rsquo;s
              marine life. Even if we are at a competition, I am conscious of my
              obligations as a person and am aware of the significance of
              preserving our one and only mother Earth. Even now, I&rsquo;m
              making an effort to influence those who are at least close to me.
              <br />
              <br />- Shehan Dinuka &#9996;
            </motion.p>
          </div>
        </motion.div>
      </DefaultLayout>
    </React.Fragment>
  );
};

export default About;
