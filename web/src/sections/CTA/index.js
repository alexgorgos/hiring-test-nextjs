import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "../../components/ArrowIcon";
import styles from "./CTA.module.css";

const Column = ({
  className,
  textWrapperClassName,
  textClassName,
  imageWrapperClassName,
  obj,
}) => {
  return (
    <div style={{ backgroundColor: obj.columnBg }} className={className}>
      <Link href={obj.columnUrl}>
        <a title={obj.columnUrlDescription}>
          <div className={imageWrapperClassName}>
            <Image
              src={obj.columnImage.asset.url}
              alt={obj.columnImage.imageAlt}
              width={921}
              height={421}
            />
          </div>
          <div className={textWrapperClassName}>
            <h5 style={{ color: obj.columnTextColor }}>{obj.columnHeading}</h5>
            <div className={textClassName}>
              <ArrowIcon
                direction={obj.columnArrowDirection}
                color={obj.columnTextColor}
              />
              <h4 style={{ color: obj.columnTextColor }}>
                {obj.columnButtonText}
              </h4>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

const CTA = ({ left, right }) => {
  return (
    <div className={styles.cta}>
      <Column
        className={styles.leftColumn}
        textWrapperClassName={styles.textWrapperLeftColumn}
        textClassName={styles.textLeftColumn}
        imageWrapperClassName={styles.imageLeftColumn}
        obj={left}
      />
      <Column
        className={styles.rightColumn}
        textWrapperClassName={styles.textWrapperRightColumn}
        textClassName={styles.textRightColumn}
        imageWrapperClassName={styles.imageRightColumn}
        obj={right}
      />
    </div>
  );
};

export default CTA;
