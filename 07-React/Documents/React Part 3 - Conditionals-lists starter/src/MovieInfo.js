import React from 'react';
import './MovieInfo.css';

function MovieInfo(props) {
    return <div className="MovieInfo">
        <h2>
            {props.movie.title}
            <span className="Star" role="img" aria-label="Favorite">⭐</span>
        </h2>
        <p className="Description">{props.movie.description}</p>
        <p className="Rating">
            {props.movie.rating}
            <span role="img" aria-label="Good Rating">👎</span>
            <span role="img" aria-label="Bad Rating">👍</span>
        </p>
        <p className="Analysis">
            An old time classic!
        </p>
    </div>;
}

export default MovieInfo;
