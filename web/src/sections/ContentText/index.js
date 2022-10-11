import { PortableText } from "@portabletext/react";
import styles from "./ContentText.module.css";

const ContentText = ({ heading, column1text, column2text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <label>{heading}</label>
        <div className={styles.text}>
          <h2 className={styles.column}>{column1text}</h2>
          <div className={`${styles.column2} ${styles.column}`}>
            <PortableText value={column2text} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentText;
