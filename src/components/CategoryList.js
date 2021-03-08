import React from "react";
import CardCategory from "./CardCategory";

const CategoryList = ({ category }) => (
  <React.Fragment>
    {category.map((card) => {
      return <CardCategory key={card.id} {...card} />;
    })}
  </React.Fragment>
);

export default CategoryList;
