import react from "react";
import NavBar from "../Navbar";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import MyContact from "../MyContact";
import React from "react";
import Link from "next/link";

const DefaultLayout = ({
  isActive,
  isShowFooter = true,
  children,
  isHideOpener = false,
}) => {
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="default-layout-container">
          <NavBar isActive={isActive} isHideOpener={isHideOpener} />
          {children}
        </div>
        {isShowFooter && (
          <footer>
            <div className="footer-container">
              <div className="logo">
                <Link href="/" alt="home page link">
                  <Image
                    src="/images/myLogo.svg"
                    width={100}
                    height={100}
                    alt="my-logo"
                  />
                </Link>
              </div>

              <MyContact />
            </div>
          </footer>
        )}
      </div>
    </React.Fragment>
  );
};

export default DefaultLayout;
