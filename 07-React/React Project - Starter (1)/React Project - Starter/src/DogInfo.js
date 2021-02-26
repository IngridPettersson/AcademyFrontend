import React from "react";

export function DogInfo({ dog }) {

  return <div className="MovieInfo">
    <h2>
      {dog.name}
      <span className="Star" role="img" aria-label="Favorite">
        {dog.favorite && '⭐'}
      </span>
    </h2>
    <h3 className="Description">{dog.breed}</h3>
    <p className="Description">{dog.description}</p>
    <p className="Rating">
      {dog.rating}
      {dog.rating >= 8.7 ? <span role="img" aria-label="Good Rating">👍</span> : <span role="img" aria-label="Bad Rating">👎</span>}
    </p>
    <p className="Analysis">
      An old time classic!
      </p>
  </div>;
}


