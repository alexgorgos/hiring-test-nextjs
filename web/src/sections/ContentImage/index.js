import Image from "next/image";
import styles from "./ContentImage.module.css";

const ContentImage = ({ image }) => {
  return (
    <div className={styles.content}>
      <Image
        src={image.asset.url}
        alt={image.imageAlt}
        width={1328}
        height={688}
        layout={"responsive"}
        objectFit={"contain"}
      />
    </div>
  );
};

export default ContentImage;
