import React, { useState } from "react";
import styles from "../styles/NavBar.module.scss";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    displayName: "Home",
    path: "/",
    key: "home",
  },
  {
    displayName: "About",
    path: "/about",
    key: "about",
  },
  {
    displayName: "Projects",
    path: "/projects",
    key: "projects",
  },
  {
    displayName: "Skills & Education",
    path: "/skills",
    key: "skills",
  },
];

const NavBar = (props) => {
  return (
    <React.Fragment>
      <nav
        className={
          styles.navBarContainer +
          ` ${props.isActive !== "home" ? styles.showHalf : ""}`
        }
      >
        {!props.isHideOpener && <div className={styles.drawOpener}></div>}
        <NavbarHomePage isActive={props.isActive} />
      </nav>
    </React.Fragment>
  );
};

const NavbarHomePage = (props) => {
  const delay = props.isActive !== "home" ? 0 : 8;
  return (
    <div className={styles.navbarLinks}>
      {links.map((item, index) => {
        const style = { animationDelay: delay + index / 10 + "s" };
        return (
          <React.Fragment key={index}>
            <div
              className={
                styles.link + `${props.isActive === item.key ? " active" : ""}`
              }
              style={style}
            >
              <Link href={item.path}>
                <a>{item.displayName}</a>
              </Link>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default NavBar;
