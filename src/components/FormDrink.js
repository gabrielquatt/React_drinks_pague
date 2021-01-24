import React from "react";
import "../styles/NewForm.css";

class DrinkNew extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { onChange, form } = this.props;
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>TITULO:</label>
              <input
                className="inputForm"
                type="text"
                autocomplete="off" 
                placeholder="title"
                name="title"
                onChange={onChange}
                value={form.title}
              />
            </div>

            <div>
              <label>DESCRIPCION:</label>
              <input
                className="inputForm"
                type="text"
                autocomplete="off" 
                placeholder="description"
                name="description"
                onChange={onChange}
                value={form.description}
              />
            </div>
            <div>
              <label>URL ICONO:</label>
              <input
                className="inputForm"
                type="text"
                autocomplete="off" 
                placeholder="icono url"
                name="img"
                onChange={onChange}
                value={form.imgIcono}
              />
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DrinkNew;
