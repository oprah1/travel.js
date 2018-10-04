import React from 'react'
import './Travel.css'

const Travel = ({country, destination, image, distance}) => {
    return (<div>
        <h3>{country} {destination}</h3>
        <h5> {distance}</h5>
        <img src={image } alt={destination} className="image"/>
    </div>)
}

export default Travel