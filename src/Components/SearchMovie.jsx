import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { NavLink } from "react-router-dom";
export default function SearchMovie({ searchValue }) {
  const [movies, setMovies] = useState([]);
  const apiKey = "c45a857c193f6302f2b5061c3b85e743";
  const imageUrl = "https://image.tmdb.org/t/p/w200";
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchValue}&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results || []))
      .catch((error) => console.log(error));
  }, [searchValue]);
  return (
    <div className="container mt-5 text-white " id="moviepage">
      <div className="row">
        {movies.map((item) => (
          <div className="col-12 col-md-6 col-lg-3 mb-4" key={item.id}>
            <NavLink to={`/moviedetail/${item.id}`} className="nav-link">
              <MovieCard
                title={item.title}
                rating={item.vote_average}
                poster={imageUrl + item.poster_path}
                key={item.id}
              />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
