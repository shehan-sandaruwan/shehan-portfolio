import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import styles from "../styles/Project.module.scss";
import Image from "next/image";

const CarouselContainer = (props) => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel>
        {props.gallery?.map((item, index) => {
          return (
            <div
              className={styles.imageContainer}
              key={item.index || index}
              style={{
                backgroundImage: props.gradient,
              }}
            >
              <div
                className={styles.bgImage}
                style={{ backgroundImage: `url(${item.imageUrl ? item.imageUrl : item})` }}
              ></div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
