import react from "react";
import NavBar from "../Navbar";
import styles from "../../styles/Home.module.scss";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import React from "react";

const DefaultLayout = (props) => {
  return (
    <React.Fragment>
      <NavBar isActive={props.isActive} />
      {props.children}
    </React.Fragment>
  );
};

export default DefaultLayout;
