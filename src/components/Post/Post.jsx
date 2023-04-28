import React from "react";
import styles from "./Post.module.scss";

export default function Post({
  imageLarge,
  imageMedium,
  imageSmall,
  text1,
  text2,
  author,
  date,
  views,
  text3,
}) {
  return (
    <article className={styles.post}>
      <img
        srcSet={`${imageSmall} 320w, ${imageMedium} 680w, ${imageLarge}   960w`}
        className={styles.image}
        sizes={`(min-width: 960px) 960px,
        320px`}
        src={imageSmall}
        alt="Фото поста"
      ></img>
      <p className={styles.text1}>{text1}</p>
      <h2 className={styles.text2}>{text2}</h2>
      <p className={styles.author}>
        {author}{" "}
        <span className={styles.dateAndViews}>
          • {date} • {views} Views
        </span>
      </p>
      <h3 className={styles.text3}>{text3}</h3>
    </article>
  );
}
