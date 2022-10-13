import react, { useEffect, useRef, useState, useCallback } from "react";
import NavBar from "../Navbar";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import MyContact from "../MyContact";
import React from "react";
import Link from "next/link";
import { menu } from "react-icons-kit/entypo/menu";
import { Icon } from "react-icons-kit";

const DefaultLayout = ({
  isActive,
  isShowFooter = true,
  children,
  isHideOpener = false,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const moreMenuRef = useRef(null);
  // Attach the scroll listener to the div

  const handleScroll = useCallback(() => {
    if (moreMenuRef.current) {
      if (window.scrollY <= 15) {
        moreMenuRef.current.style.color = "rgba(243, 159, 32, 0.78)";
      } else {
        moreMenuRef.current.style.color = "rgba(243, 159, 32, 0.2)";
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const onClickMoreMenu = () => {
    setIsMobile(true);
  };

  const handleClose = () => {
    setIsMobile(false);
  };

  return (
    <React.Fragment>
      <div className="main-container" ref={containerRef}>
        <div className="default-layout-container">
          <div
            className={styles.mobileNavIcon}
            onClick={onClickMoreMenu}
            ref={moreMenuRef}
          >
            <Icon size={64} icon={menu} />
          </div>
          <NavBar
            isActive={isActive}
            isShow={isMobile}
            handleClose={handleClose}
            width={containerRef?.current?.offsetWidth}
          />
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
