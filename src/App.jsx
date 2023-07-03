import './App.css'
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
// 8d2e4ef4

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=8d2e4ef4"


const App = ()=> {

  const [movies, setmovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("")


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setmovies(data.Search)
  }


  return (
    <div className="App">
        <h1>MoWiki</h1>

        <div className="search">
          <input 
            type="text" 
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)} />

          <button onClick={()=> searchMovies(searchTerm)}>
            <span className="material-symbols-outlined">
            search
            </span>
          </button>
        </div>

        {
          movies?.length > 0 ? (
            <div className="container">
              {
                movies.map((movie) =>(
                  <MovieCard movie={movie}/>
                ))
              }
            </div>
          ) : (
            <div className="empty">
              No Movie Found :(
            </div>
          )
        }

      <div className="credits">
        -by <a href="http://muz4mmil.github.io/" target='blank'>Muzammil</a>
      </div>

    </div>
  )
}

export default App
