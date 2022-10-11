import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./NavItem.module.css";

const NavItem = ({ itemName, itemUrl, active }) => {
  return (
    <Link href={itemUrl}>
      <a
        className={`navItem ${styles.wrapper} ${active ? styles.active : ""}`}
        title={`Go to ${itemName}`}
      >
        {itemName}
      </a>
    </Link>
  );
};

export default NavItem;

NavItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemUrl: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
