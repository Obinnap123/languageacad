import React from "react";
import Images from "../assests/images";
import styles from "../styles/modules/main.module.scss";

const Card = ({ image, title, description, link }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <a href={link} className={styles.cardLink}>
        Learn More
        <img src={Images.Arrow} alt="Arrow icon" className={styles.arrowIcon} />
      </a>
    </div>
  );
};

export default Card;
