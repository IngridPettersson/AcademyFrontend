import React, {useState} from "react";


export function DogInfo(props) {
  const [dogImage, setShowDogImage] = useState(null);

  const ShowMe = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then((result) => setShowDogImage(result.message));
  }

  let dogInfoContent = "";

  if (dogImage !== null) {
    dogInfoContent = (<img className="DogImg" src={dogImage} alt="A dog"/>);
  } else {
    dogInfoContent = 
    (<div> <h3 className="Description">{props.dog.breed}</h3>
    <p className="Description">{props.dog.description}</p>
   <p className="Rating">
    {props.dog.rating}
    {props.dog.rating >= 8.7 ? <span role="img" aria-label="Good Rating">👍</span> : <span role="img" aria-label="Bad Rating">👎</span>}
  </p>
  <p className="Analysis">
    An old time classic!
    </p></div>);
  }

  return (
  <div className="MovieInfo">
    <h2>
      {props.dog.name}
      <span className="Star" role="img" aria-label="Favorite">
        {props.dog.favorite && '⭐'}
      <button onClick={ShowMe}>See me!</button>
      </span>
      </h2>

{dogInfoContent}
        </div>
  )   
}
