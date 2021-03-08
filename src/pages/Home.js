import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Info from "../components/Info";
import CategoryList from "../components/CategoryList";
import "../styles/CardCategorys.css";
import FormCategory from "../components/FormCategory";

const Home = ({ category, form, onChange, onSubmit }) => (
  <React.Fragment>
    <Nav />
    <div className="container-fluid">
      <div className="row categorys">
        <div>
          <h1> CATEGORIA DE BEBIDAS</h1>
        </div>
        <CategoryList category={category} />
      </div>
      <FormCategory onChange={onChange} onSubmit={onSubmit} form={form} />
      <Info />
    </div>
    <Footer />
  </React.Fragment>
);

export default Home;
