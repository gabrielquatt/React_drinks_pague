import React from "react";
import Nav from "../components/Nav";
import FormDrink from "../components/FormDrink";
import Card from "../components/Card";

import Footer from "../components/Footer";

const DrinksNew = ({ form, onChange, onSubmit }) => (
  <React.Fragment>
    <Nav username="gabriel" />
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
        <div className="col">
          <FormDrink onChange={onChange} onSubmit={onSubmit} form={form} />
        </div>
        <div className="col">
          <h1>vista previa:</h1>
          <Card {...form} />
        </div>
        AllDrinksContainer
      </div>
    </div>
    <Footer />
  </React.Fragment>
);
export default DrinksNew;
