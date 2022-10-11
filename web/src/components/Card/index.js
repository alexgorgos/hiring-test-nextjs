import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Button from "../Button";
import styles from "./Card.module.css";

const Card = ({
  heading,
  text,
  buttonText,
  buttonUrl,
  buttonDescription,
  hoverBgColor,
  imageUrl,
  imageAlt,
}) => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div className={styles.outerWrapper}>
      <div
        className={styles.cardWrapper}
        style={{ backgroundColor: isHover ? hoverBgColor : "transparent" }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className={styles.imageWrapper}>
          <Image src={imageUrl} alt={imageAlt} layout="fill" />
        </div>
        <div className={styles.content}>
          <h4>{heading}</h4>
          <p className={styles.text}>{text}</p>
          <Button
            href={buttonUrl}
            description={buttonDescription}
            className={styles.button}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonDescription: PropTypes.string.isRequired,
  hoverBgColor: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};
