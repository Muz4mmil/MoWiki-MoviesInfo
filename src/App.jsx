import './App.css'
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
// 8d2e4ef4

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8d2e4ef4"


const App = ()=> {

  const [movies, setmovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("")


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setmovies(data.Search)
  }

  const movie1 = {
    "Title": "Avengers: Endgame",
    "Year": "2019",
    "imdbID": "tt4154796",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
}

  // useEffect(()=>{
  //   searchMovies();
  // }, [])

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
              No Movie Found  :(
            </div>
          )
        }

    </div>
  )
}

export default App
