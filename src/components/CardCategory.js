import React from "react";

const CardCategory = ({ title, leftColor, rightColor }) => (
  <div className="col-sm-2">
  <div className="card">
    <div
      
      style={{
        backgroundImage: `linear-gradient(to right, ${
          leftColor || "#f12711"
        }  , ${rightColor || "#f5af19"})`
      }}
    >
      <h5 className="card-title text-uppercase">{title|| "NAME"}</h5>
      {/* <a className="btn btn-primary">
        All Drinks
      </a> */}
    </div>
  </div>
  </div>
);

export default CardCategory;
