import React from 'react'
import Travel from './Travel'

const tab = [
  {
    country: "Senegal",
    destination: "Dakar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0n0j2g90dBnEVWNXaphnlCRF2hlxzPmCYAknAkvtLQGIdGWM",
    distance: "454 464km"
  },
  {
    country: "Tanzanie",
    destination: "Zanzibar",
    image: "https://media.routard.com/image/79/8/photo7.1446798.c1000x491.jpg",
    distance: "145 454km"
  },
  {
    country: "Mali",
    destination: "Bamako",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDuQCu2FOP94e5xkIJWcppavAREvs8ChX0htviq35LiA5vCwwQ",
    distance: "151 515km"

  },
  {
    country: "Sahara",
    destination: "Saraha",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJ4Vv9vNALs0VfEo6hYuMyeLSGa4-UtobI6Jela5YaXYeGFp6bQ",
    distance: "254 154km"
  },
  {
    country: "Afrique du sud",
    destination: "Pretoria",
    image: "https://back.rive-gauche.fr/Upload/Gallery/692eddf5-a2bb-41af-b898-9e879c030471/10603_27.jpg",
    distance: "254 154km"
  }
];

const Travels = () => {
  return (
    <div>
      {tab.map((element) => {
        return (
          <Travel {...element} />
        )
      }
      )}
    </div> 
  )
}



export default Travels