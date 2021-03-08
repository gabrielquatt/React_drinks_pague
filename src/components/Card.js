import React from "react";
import imgD from "../images/empy.png";
import "../styles/Card.css";

const Card = ({title, description, logo, leftColor, rightColor }) => (
<React.Fragment>
  <div className="col">
  <div
    className="container-fluid card"
    style={{
      backgroundImage: `linear-gradient(to right, ${
        leftColor || "#928DAB"
      }  , ${rightColor || "#1F1C2C"})`, //usa url contante declarada
    }}
  >
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
      <div className="col">
        <h1>{title || "DRINK NAME"}</h1>
        <p>{description || "description of the new drink for the website"}</p>
    
      </div>

      <div className="col">
        <img src={logo || imgD} alt="img" />
      </div>
    </div>
  </div>
  </div>
  </React.Fragment>
);

export default Card;

/* className Card extends React.Component{

/* constructor(props){
    //props son elementos fijos del componente creado
    super(props)
    //state es informacion que va a cambiar 
    /* this.state = {
        image: 'https://icon-icons.com/icons2/330/PNG/128/Grim-Reaper-icon_35201.png'
    }
   } */

//se va a ejecutar luego de que un componente sea montado
/* componentDidMount(){
  setTimeout(()=>{
      this.setState({
          image: 'https://icon-icons.com/icons2/330/PNG/128/Sea-Monster-icon_35231.png'
      })
  },1000)
} 

    render(){
        const {title,description,img} = this.props
        return (
          <div
            className="container"
            style={{
              backgroundImage: `url(${fondoImg})`, //usa url contante declarada
            }}
          >
            <div className="info_card">
              <h1>{title || "DRINK NAME"}</h1>
              <p>{description || "description of the new drink for the website"}</p>
            </div>

            <div>
              <img src={img || imgD } alt="img"/>
            </div>
          </div>
        );
    }
} */
