import Card from "../../components/Card";
import styles from "./ContentCards.module.css";

const ContentCards = ({ heading, cards }) => {
  return (
    <div className={`container ${styles.content}`}>
      <h3>{heading}</h3>
      <div className={styles.cards}>
        {cards.map((card, i) => {
          return (
            <Card
              key={i}
              heading={card.heading}
              text={card.text}
              buttonText={card.buttonText}
              buttonUrl={card.buttonUrl}
              buttonDescription={card.buttonDescription}
              hoverBgColor={card.hoverBgColor}
              imageUrl={card.image.asset.url}
              imageAlt={card.image.imageAlt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContentCards;
