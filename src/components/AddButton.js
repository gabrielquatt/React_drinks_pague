import React from 'react'
import '../styles/Style.css'
import { Link } from 'react-router-dom'

const AddButton = (props) => (
    <Link to="/home/new">
       <button className="btn-add"> + </button>
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