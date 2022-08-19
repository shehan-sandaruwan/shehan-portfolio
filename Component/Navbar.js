import React from "react";
import styles from "../styles/NavBar.module.scss";
import Link from "next/link";

const NavBar = (props) => {
  return (
    <React.Fragment>
      <nav className={styles.navBarContainer}>
        <div className={styles.navbarLinks}>
          <div className={styles.link}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className={styles.link}>
            <Link href="/">
              <a>About</a>
            </Link>
          </div>
          <div className={styles.link}>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </div>
          <div className={styles.link}>
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
