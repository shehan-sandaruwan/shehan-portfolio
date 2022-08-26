import React from "react";
import styles from "../styles/NavBar.module.scss";
import Link from "next/link";

const NavBar = (props) => {
  return (
    <React.Fragment>
      <nav className={styles.navBarContainer}>
        <div className={styles.navbarLinks}>
          <div
            className={
              styles.link + `${props.isActive === "home" ? " active" : ""}`
            }
          >
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div
            className={
              styles.link + `${props.isActive === "about" ? " active" : ""}`
            }
          >
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
          <div
            className={
              styles.link + `${props.isActive === "projects" ? " active" : ""}`
            }
          >
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </div>
          <div
            className={
              styles.link + `${props.isActive === "skills" ? " active" : ""}`
            }
          >
            <Link href="/">
              <a>Skils &#38; Education</a>
            </Link>
          </div>
          <div
            className={
              styles.link +
              " nav-items" +
              `${props.isActive === "contact" ? " active" : ""}`
            }
          >
            <Link href="/">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
