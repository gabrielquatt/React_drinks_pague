import React from 'react'
import FatalErrorImg from '../images/500.jpg'
import '../styles/Error.css'

const FatalError = () => (
    <div>
        <img className="imgError" src={FatalErrorImg} alt="500 FatalError"></img>
    </div>
)

export default FatalError;