import react from "react";
import NavBar from "../Navbar";
import styles from "../../styles/Home.module.scss";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const DefaultLayout = (props) => {
  return (
    <div className={styles.container}>
      <NavBar />
      {props.children}
    </div>
  );
};

export default DefaultLayout;
