import React from 'react'
import fondoImg from '../images/fondo-violet.jpg' //constante del fondo 
import '../styles/Card.css'

class Card extends React.Component{

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
} */

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
              <h1>{title}</h1>
              <p>{description}</p>
            </div>

            <div>
              <img src={img} alt="img"/>
            </div>
          </div>
        );
    }
}

export default Card
