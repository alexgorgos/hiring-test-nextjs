import styles from "./Footer.module.css";
import Logo from "../../components/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logoWrapper}>
        <Logo className={styles.logo} color={"#ffffff"} />
      </div>
      <div className={styles.links}>
        <Link href="/#">
          <a>Privacy Policy</a>
        </Link>
        <Link href="/#">
          <a>Cookie Policy</a>
        </Link>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

export default Footer;
