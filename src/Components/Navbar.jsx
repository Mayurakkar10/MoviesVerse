import React, { useState } from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import UpComingMovies from "./UpComingMovies";
import "../App.css";
export default function Navbar({ sendToParent }) {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
    sendToParent(e.target.value);
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{
          height: "5rem",
          backgroundColor: "black",
        }}
      >
        <div className="container" style={{ backgroundColor: "black" }}>
          <a
            className="navbar-brand text-white"
            href="#"
            style={{ backgroundColor: "black", fontSize: "2rem" }}
          >
            MoviesVerse
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
            style={{ backgroundColor: "black", zIndex: "1", height: "20rem" }}
          >
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 "
              style={{ backgroundColor: "black" }}
            >
              <li className="nav-item" style={{ backgroundColor: "black" }}>
                <NavLink to="/" className=" nav-link text-white">
                  Popular Movies
                </NavLink>
              </li>
              <li className="nav-item" style={{ backgroundColor: "black" }}>
                <NavLink to="/toprated" className=" nav-link text-white">
                  Top Rated
                </NavLink>
              </li>
              <li className="nav-item" style={{ backgroundColor: "black" }}>
                <NavLink to="/upcoming" className="nav-link text-white">
                  Upcoming
                </NavLink>
              </li>
            </ul>
            <form
              className="d-flex"
              role="search"
              style={{ backgroundColor: "black" }}
            >
              <NavLink to="/search" className="me-2">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={value}
                  onChange={handleChange}
                />
              </NavLink>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
