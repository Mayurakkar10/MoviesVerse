import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();
  const apiKey = "c45a857c193f6302f2b5061c3b85e743";
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  const [moviedetail, setMovieDetail] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchMovieDetail() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovieDetail(data);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchMovieCast() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cast details");
        }
        const data = await response.json();
        setCast(data.cast.slice(0, 10)); // Show only the top 10 actors
      } catch (error) {
        console.log("Error fetching cast:", error);
      }
    }

    fetchMovieDetail();
    fetchMovieCast();
  }, [id]);

  return (
    <div className="container text-white mt-3">
      {/* Movie Header */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${imageUrl}${moviedetail?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          borderRadius: "10px",
        }}
      >
        <h1 className="text-white text-center bg-dark p-3 rounded">
          {moviedetail?.title}
        </h1>
      </div>

      {/* Movie Details */}
      <div className="row mt-4">
        <div className="col-md-4">
          <img
            src={
              moviedetail?.poster_path
                ? `${imageUrl}${moviedetail.poster_path}`
                : "default.jpg"
            }
            alt={moviedetail?.title}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h2>{moviedetail?.title}</h2>
          <p>
            <strong>Release Date:</strong> {moviedetail?.release_date}
          </p>
          <p>
            <strong>⭐ Rating:</strong> {moviedetail?.vote_average}/10
          </p>
          <p>
            <strong>Overview:</strong> {moviedetail?.overview}
          </p>
          <h3 className="mt-5">Cast</h3>
          <div className="row">
            {cast.map((actor) => (
              <div className="col-3 col-md-2 text-center" key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `${imageUrl}${actor.profile_path}`
                      : "https://via.placeholder.com/100x150"
                  }
                  alt={actor.name}
                  className="img-fluid rounded-circle"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <p className="mt-2">{actor.name}</p>
                <p className="text-muted small">{actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
