import react from "react";
import NavBar from "../Navbar";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import React from "react";

const DefaultLayout = (props) => {
  return (
    <React.Fragment>
      <div className="default-layout-container">
        <NavBar isActive={props.isActive} />
        {props.children}
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

export default DefaultLayout;
