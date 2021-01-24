import React from "react";
import Nav from "../components/Nav";
import FormDrink from "../components/FormDrink";
import Card from "../components/Card";
import "../styles/NewForm.css";

class DrinkNew extends React.Component {
  state = {
    form: {
      title: "",
      description: "",
      img: "",
    },
  };

  handleChange = (e) => {
    //evento de captura los cambio en los inputs
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Nav username="gabriel" />

        <div className="cont">
          <h1>vista previa:</h1>
          <div>

          <Card {...this.state.form} />

          </div>
          <div>
          <FormDrink onChange={this.handleChange} form={this.state.form} />
            
          </div>
        </div>
      </div>
    );
  }
}

export default DrinkNew;
