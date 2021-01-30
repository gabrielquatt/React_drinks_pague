import React from "react";

import "../styles/NewForm.css";
import Error from "./500";
import Loading from "../components/Loading";
import DrinksNew from "./DrinkNew";

import url from "../config";

class DrinkNewContainer extends React.Component {
  state = {
    form: {
      title: "",
      description: "",
      logo: "",
    },
    loading: false,
    error: null,
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
      console.log(json)
      this.setState({
        loading: false,
      });
      this.props.history.push("../home");
    } catch (error) {
      console.log("en catch");
      this.setState({
        loading: false,
        error,
      });
    }

    console.log(this.state);
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
        form={this.state.form}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default DrinkNewContainer;
