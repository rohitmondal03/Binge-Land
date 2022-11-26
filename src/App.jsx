import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './App.css'
import searchIcon from './search.svg';
// 5fbada63
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=5fbada63';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm]= useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman')
    }, [])

    const movie1 = {
        "Title": "Amazing Spiderman Syndrome",
        "Year": "2012",
        "imdbID": "tt2586634",
        "Type": "movie",
        "Poster": "N/A"
    }

    return (
        <div className="app">

            <h1>Binge Land</h1>

            <div className="search">
                <input
                    placeholder="Search any movie"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={searchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie}/>
                            ))}
                        </div>

                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )

            }


        </div>
    )
}

export default App;