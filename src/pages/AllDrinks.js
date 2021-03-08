import React from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CardList from "../components/CardList";
import AddButton from "../components/ButtonAdd";

const AllDrinks = ({data}) =>(
  <React.Fragment>
        <Nav />
        <div className="container-fluid">
          <div className="row row-cols-sm-1 row-cols-md-2">
            <CardList exercice={data} />
          </div>
        <AddButton />
        </div>
        <Footer />
      </React.Fragment>
)
export default AllDrinks
