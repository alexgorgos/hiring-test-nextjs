import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ children, href, description, small, className }) => {
  return (
    <Link href={href || "google.com"}>
      <a
        className={`button ${styles.button} ${small ? `small` : ``} ${
          className ? className : ``
        }`}
        title={description}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  small: PropTypes.bool,
};
