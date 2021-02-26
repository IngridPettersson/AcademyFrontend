import React from 'react';
import './App.css';
import MovieInfo from './MovieInfo';
import movies from './movies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Movies</h1>
      </header>
      <main>
        {/* {
          movies.map(
            (m) => {
              return (
                <MovieInfo movie={m} />
              )
            }
          )
        } */}
        
        <MovieInfo movie={movies[0]} />
        <MovieInfo movie={movies[1]} />
        <MovieInfo movie={movies[2]} />
        <MovieInfo movie={movies[3]} />
        <MovieInfo movie={movies[4]} />
        <MovieInfo movie={movies[5]} />
      </main>
    </div>
  );
}

export default App;
