import React from "react";
import styles from "../styles/Contact.module.scss";
import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/entypo/github";
import { pin } from "react-icons-kit/entypo/pin";
import { linkedin } from "react-icons-kit/entypo/linkedin";
import { mobile } from "react-icons-kit/entypo/mobile";
import { mail } from "react-icons-kit/entypo/mail";
import { link } from "react-icons-kit/entypo/link";

const MyContact = (props) => {
  return (
    <React.Fragment>
      <div className={styles.contactConatiner}>
        {/* <a href="/ShehanDinukaResume.pdf" target="_blank" rel="noreferrer">
          <div className={styles.downloadResume}>
            <label>View Resume</label>
          </div>
        </a> */}
        <div className={styles.contactDetails}>
          <div
            className={styles.contactItem}
            style={{ border: "none !important" }}
          >
            <Icon icon={pin} />
            <span>Colombo, Sri Lanka</span>
          </div>
          <div className={styles.contactItem + " " + styles.border}>
            <a href="tel:+94771752721" rel="noreferrer">
              <Icon icon={mobile} /> +94 77 175 2721
            </a>
          </div>
          <div className={styles.contactItem + " " + styles.border}>
            <a
              href="mailto:shehan.k.dinuka@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon={mail} />
              <span>shehan.k.dinuka@gmail.com</span>
            </a>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <a
            href="https://www.linkedin.com/in/shehan-dinuka/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={linkedin} /> <div>LinkedIn</div>
          </a>
          <a
            href="https://github.com/shehan-sandaruwan"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={github} /> <div>GitHub</div>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~017aadf5a5242dbe5a"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={link} /> <div>Upwork</div>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyContact;
