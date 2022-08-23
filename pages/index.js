import React from "react";
import DefaultLayout from "../Component/Layout/DefaultLayout";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <React.Fragment>
      <DefaultLayout>
        <div className={styles.mySelfImage}>
          <Image
            className={styles.imagePosition}
            src="/images/yellowHeart/myself.svg"
            width={400}
            height={500}
            alt="my-self"
          />
        </div>
      </DefaultLayout>
    </React.Fragment>
  );
}
