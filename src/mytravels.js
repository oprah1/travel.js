// src/Quote.js
import React from "react";

const Mytravels = ({country, destination, image, distance}) => (
    <figure>
        <img
            src={image}
            alt={destination}
        />
        <figcaption>
            <blockquote>{destination}</blockquote>
            <cite>{country}</cite>
            <dest>{distance}</dest>
        </figcaption>
    </figure>
);

export default Mytravels;
