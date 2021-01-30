import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Info from "../components/Info"

class Home extends React.Component {
  render() {
    return (
    <React.Fragment>
      <Nav />
        <Info />
      <Footer />
    </React.Fragment>
    )
  }
}

export default Home;
