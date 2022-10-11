import * as React from "react";
import Logo from "../../components/Logo";
import NavItem from "../../components/NavItem";
import styles from "./Nav.module.css";

const navitems = [
  {
    name: "commercial",
    url: "/#",
  },
  {
    name: "touretes",
    url: "/#",
  },
  {
    name: "our history",
    url: "/#",
  },
  {
    name: "get in touch",
    url: "/#",
  },
];

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  return (
    <nav className={styles.nav}>
      <Logo className={styles.mobileLogo} color={"#03110E"} />
      <button
        onClick={() => setShowMobileNav(!showMobileNav)}
        className={`button ${styles.menuButton}`}
      >
        {showMobileNav ? "x" : "menu"}
      </button>
      <ul
        className={`${styles.navBar} ${showMobileNav ? "" : styles.hideMenu}`}
      >
        <li>
          {console.log(navitems[0].url)}
          <NavItem itemName={navitems[0].name} itemUrl={navitems[0].url} />
        </li>
        <li>
          <NavItem itemName={navitems[1].name} itemUrl={navitems[1].url} />
        </li>
        <Logo className={styles.desktopLogo} />
        <li>
          <NavItem itemName={navitems[2].name} itemUrl={navitems[2].url} />
        </li>
        <li>
          <NavItem itemName={navitems[3].name} itemUrl={navitems[3].url} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
