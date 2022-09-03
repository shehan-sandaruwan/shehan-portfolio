import React from "react";
import styles from "../styles/Contact.module.scss";
import Image from "next/image";

const MyContact = (props) => {
  return (
    <React.Fragment>
      <div className={styles.contactConatiner}>
        <div className={styles.contactHeader}>
          <label>Let&rsquo;s get in Touch</label>
        </div>
        <a href="" target="_blank" rel="noreferrer">
          <div className={styles.downloadResume}>
            <label>View Resume</label>
          </div>
        </a>
        <div className={styles.contactDetails}>
          <div
            className={styles.contactItem}
            style={{ border: "none !important" }}
          >
            <Image
              width={45}
              height={45}
              src="/images/home-address.png"
              alt="home address"
            />{" "}
            <span>Colombo, Sri Lanka</span>
          </div>
          <div className={styles.contactItem + " " + styles.border}>
            <Image
              width={40}
              height={40}
              src="/images/phone-call.png"
              alt="home address"
            />{" "}
            <a href="tel:+94771752721" rel="noreferrer">
              +94 77 175 2721
            </a>
          </div>
          <div className={styles.contactItem + " " + styles.border}>
            <Image
              width={40}
              height={40}
              src="/images/mail.png"
              alt="mail address"
            />{" "}
            <a
              href="mailto:shehan.k.dinuka@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              shehan.k.dinuka@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <a
            href="https://www.linkedin.com/in/shehan-dinuka/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={50}
              height={50}
              src="/images/linkedin.png"
              alt="home address"
            />{" "}
          </a>
          <a
            href="https://github.com/shehan-sandaruwan"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={50}
              height={50}
              src="/images/github.png"
              alt="home address"
            />{" "}
          </a>
          <a
            href="https://www.upwork.com/freelancers/~017aadf5a5242dbe5a"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={50}
              height={50}
              src="/images/upwork.png"
              alt="home address"
            />{" "}
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyContact;
