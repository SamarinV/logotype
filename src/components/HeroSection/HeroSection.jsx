import React from "react";
import img1Small from "../../images/hero-section/img1-320.png";
import img1Medium from "../../images/hero-section/img1-680.png";
import img1Large from "../../images/hero-section/img1-960.png";
import img2Small from "../../images/hero-section/img2-320.png";
import img2Medium from "../../images/hero-section/img2-680.png";
import img3Small from "../../images/hero-section/img3-320.png";
import img3Medium from "../../images/hero-section/img3-680.png";
import img3Large from "../../images/hero-section/img3-960.png";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <div className={styles.block}>
      <img
        srcSet={`${img1Small} 320w, ${img1Medium} 680w, ${img1Large}   960w`}
        className={styles.image}
        sizes={`(min-width: 960px) 960px,
        360px`}
        src={img1Small}
        alt="Фото"
      ></img>
      <div className={styles.mainContent}>
        <p className={styles.textSale}>sale up to 50%</p>
        <h1 className={styles.title}>Pulvinar Amet Morbi Efficitur Justo</h1>
        <img
          srcSet={`${img2Small} 320w, ${img2Medium} 680w`}
          className={styles.mainImage}
          sizes={`(min-width: 960px) 680px,
        320px`}
          src={img1Small}
          alt="Фото"
        ></img>
        <p className={styles.subtitle}>
          Nunc venenatis adipiscing mauris lorem non risus molestie ut. Dolor
          ex. Cras sodales efficitur nec{" "}
        </p>
        <a href="#" className={styles.link}>
          Shop All
        </a>
      </div>
      <img
        srcSet={`${img3Small} 320w, ${img3Medium} 680w, ${img3Large}   960w`}
        className={styles.image}
        sizes={`(min-width: 960px) 960px,
        320px`}
        src={img1Small}
        alt="Фото"
      ></img>
    </div>
  );
}
