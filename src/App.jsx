import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import PopularMovies from "./Components/PopularMovies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopRatedMovies from "./Components/TopRatedMovies";
import UpComingMovies from "./Components/UpComingMovies";
import Pagination from "./Components/Pagination";
import MovieDetail from "./Components/MovieDetail";
import SearchMovie from "./Components/SearchMovie";
export default function App() {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  function handler(newpage) {
    setPage(newpage);
  }
  function sendToParent(value) {
    setSearchValue(value);
  }
  return (
    <BrowserRouter>
      <Navbar sendToParent={sendToParent} />
      <Routes>
        <Route
          path="/"
          element={<PopularMovies pageNum={page} searchValue={searchValue} />}
        />
        <Route
          path="/toprated"
          element={<TopRatedMovies pageNum={page} searchValue={searchValue} />}
        />
        <Route
          path="/upcoming"
          element={<UpComingMovies pageNum={page} searchValue={searchValue} />}
        />
        <Route path="/moviedetail/:id" element={<MovieDetail />} />
        <Route
          path="/search"
          element={<SearchMovie searchValue={searchValue} />}
        />
      </Routes>
      <Pagination takePage={handler} />
      <Footer />
    </BrowserRouter>
  );
}
