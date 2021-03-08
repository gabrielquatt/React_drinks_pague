import React from "react";
import Error from "./500";
import Loading from "../components/Loading";
import DrinksNew from "./DrinkNew";

import url from "../config";

class DrinkNewContainer extends React.Component {
  state = {
    category: [],
    form: {
      title: "",
      description: "",
      logo: "",
      id_category: "",
      leftColor: "",
      rightColor: "",
    },
    loading: true,
    error: null,
  };

  //Get All Category
  async componentDidMount() {
    await this.fetchCategory();
  }

  fetchCategory = async () => {
    try {
      let res = await fetch(url + "/api/drink/category");
      let category = await res.json();

      this.setState({
        loading: false,
        category,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
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

  // Guardar new Drink
  handleSubmit = async (e) => {
    this.setState({
      loading: true,
    });
    e.preventDefault();
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.form),
      };

      let res = await fetch(url + "/api/drink", config);
      let json = await res.json();
      console.log(json);
      this.setState({
        loading: false,
      });
      this.props.history.push("../home"); //una vex finalizado redirecciona la pagina
    } catch (error) {
      console.log("en catch");
      this.setState({
        loading: false,
        error,
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <Error />;
    }
    return (
      <DrinksNew
        category={this.state.category}
        form={this.state.form}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default DrinkNewContainer;
