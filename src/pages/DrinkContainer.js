import React from React;

class DrinkContainer extends React.Components{

    async componentDidMount() {
        await this.fetchCategory(id);
      }

    fetchCategory = async (id) => {
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
        
    
      render() {
        if (this.state.loading) {
          return <Loading />;
        }
        if (this.state.error) {
          return <Error />;
        }
        return }

}

export default DrinkContainer