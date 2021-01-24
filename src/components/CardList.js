import React from "react";
import Card from "./Card";

const CardList = ({exercice}) => (
    <div>
      {exercice.map((card) => {
        return (
          <Card
            key={card.id}//el navegador me pide que tengan el id
            title={card.title}
            description={card.description}
            img={card.imgIcono}
          />
        );
      })}
    </div>  
)

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

export default CardList
