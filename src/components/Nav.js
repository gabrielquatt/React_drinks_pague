import React from 'react'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'

const Nav = ({username}) =>(
    <nav className="nav">
        <div>
            <h1>Pague ReactJS Drinks user props = {username}</h1>
            <p>practica individual</p>
        </div>

        <ul>
        <Link to="/home">
        <li>
                <input 
                    type="submit" 
                    value="Home"
                />
            </li>
        </Link>
        <Link to="/home/new">
            <li>
                <input 
                    type="submit" 
                    value="Add Drink"
                />
            </li>
        </Link>
            <li>All Drinks</li>

            <li className="about">About</li>

        </ul>
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