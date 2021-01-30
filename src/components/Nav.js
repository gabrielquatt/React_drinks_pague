import React from 'react'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'
import icoImg from '../images/icono.png'

const Nav = () => (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div>
            <h3>ReactJS Drinks</h3>
        </div>
    <img src={icoImg} className="icono" alt="react"></img>

  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul>

      <Link to="/">
        <li className="nav-item">
             <button className="btn btn-outline-primary" type="button" value="Home">Home</button>
        </li>
        </Link>
        <Link to="/home/all">
        <li className="nav-item">
             <button className="btn btn-outline-primary" type="button" value="Home">All Drinks</button>
        </li>
        </Link>

        <Link to="/home/new">
            <li className="nav-item"> 
              <button className="btn btn-outline-primary" type="button"   value="Add Drink">Add Drink</button>    
            </li>
        </Link>

      </ul>
    </div>
  </div>
</nav>


 

     
       
         
)

/* function Nav(props){
return(
    <div className="nav">
        <div>
            <h1>Pague ReactJS Drinks user props = {props.username}</h1>
            <p>practica individual</p>
        </div>
    </div>
) 
} */

export default Nav