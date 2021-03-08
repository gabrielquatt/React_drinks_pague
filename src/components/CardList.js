import React from "react";
import Card from "./Card";

const CardList = ({ exercice }) => (
  <React.Fragment>
    {exercice.map((card) => {
      return <Card key={card.id} {...card} />;
    })}
  </React.Fragment>
);

/* function CardList(props) {
  return (
    <div>
      {props.exercice.map((card) => {
        return (
          <Card
            tittle={card.title}
            description={card.description}
            img={card.imgIcono}
            leftColor={card.leftColor}
            rightColor={card.rightColor}
          />
        );
      })}
    </div>
  );
} */

export default CardList;
