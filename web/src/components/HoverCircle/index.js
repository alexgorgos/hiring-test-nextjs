import * as React from "react";
import PropTypes from "prop-types";
import styles from "./HoverCircle.module.css";

const HoverCircle = ({ name, price, isVisible }) => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const moveCursor = (e) => {
      setMousePosition({ x: e.clientX - 50, y: e.clientY - 50 });
    };
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{
        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
        opacity: `${isVisible ? 1 : 0}`,
      }}
    >
      <div className={`button ${styles.name}`}>
        <span>{name}</span>
      </div>
      <div className={`button small ${styles.price} `}>
        <span>From £{price}</span>
      </div>
    </div>
  );
};

export default HoverCircle;

HoverCircle.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  isVisible: PropTypes.bool.isRequired,
};
