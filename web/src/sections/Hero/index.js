import React from "react";
import Button from "../../components/Button";
import HoverCircle from "../../components/HoverCircle";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const Hero = ({
  heading,
  paragraph,
  buttonText,
  buttonUrl,
  buttonDescription,
  caravansList,
}) => {
  const [hoverData, setHoverData] = React.useState(null);
  const [hoverVisible, setHoverVisible] = React.useState(false);

  const handleMouseOver = (e) => {
    setHoverData({ name: caravansList[e].name, price: caravansList[e].price });
    setHoverVisible(true);
  };

  const hideHover = () => {
    setHoverData(null);
    setHoverVisible(false);
  };

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>{heading}</h1>
            <p>{paragraph}</p>
            <Button href={buttonUrl} description={buttonDescription}>
              {buttonText}
            </Button>
          </div>
        </div>
        <div className={styles.caravans}>
          <ul className={styles.caravansList} onScrollCapture={hideHover}>
            {caravansList.map((caravan, i) => {
              return (
                <li
                  key={i}
                  className={styles.caravanItem}
                  onMouseOver={() => handleMouseOver(i)}
                  onMouseOut={hideHover}
                >
                  <Link href="/#">
                    <a>
                      <Image
                        src={caravan.image.asset.url}
                        alt={caravan.image.imageAlt}
                        width={749}
                        height={342}
                      />
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <HoverCircle
        isVisible={hoverVisible}
        name={hoverData && hoverData.name}
        price={hoverData && hoverData.price}
      />
    </>
  );
};

export default Hero;
