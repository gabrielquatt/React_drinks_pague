import React from "react";

import Loading from "../components/Loading";
import Error from "./500";
import url from "../config";
import AllDrinks from "./AllDrinks"

class AllDrinksContainer extends React.Component {
  state = {
    data: [],
    loading: true,
    error: null,
  };

  async componentDidMount() {
    await this.fetchDrinks();
  }

  fetchDrinks = async () => {
    try {
      let res = await fetch(url + "/api/drink");
      let data = await res.json();
     
      this.setState({
        data,
        loading: false,
      });

    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    if (this.state.error) {
      return <Error />;
    }

    return (
        <AllDrinks
            data = {this.state.data}
        />
    );
  }
}

export default AllDrinksContainer;