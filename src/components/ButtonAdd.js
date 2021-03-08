import React from 'react'
import '../styles/Style.css'
import { Link } from 'react-router-dom'

const AddButton = () => (
    <Link to="/home/new">
       <button type="button" className="btn btn-lg btn-primary"> new </button>
    </Link>
)

/* function AddButton(props){
    return (
        <Link to="/home/new">
            <button className="btn-add"> + </button>
        </Link>
    )
} */

export default AddButton