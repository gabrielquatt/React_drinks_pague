import React from 'react'
import NotFoundImg from '../images/404.png'
import '../styles/Error.css'

const NotFound = () => (
    <div>
        <img className="imgError" src={NotFoundImg} alt="404 NotFound"></img>
    </div>
)

export default NotFound;