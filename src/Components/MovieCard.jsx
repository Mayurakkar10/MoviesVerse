import React from "react";
let cardStyle = {
  width: "20rem",
  height: "40rem",
  borderRadius: "15px",
  backgroundColor: "#272B34",
  color: "white",
};
import "../App.css";
export default function MovieCard(props) {
  return (
    <div className="card m-2 mx-auto" style={cardStyle}>
      <img src={props.poster} style={{ width: "18rem", margin: "1rem auto" }} />
      <div className="text-div text-center">
        <h1 style={{ fontSize: "2rem" }}>{props.title}</h1>
        <p>Rating:{props.rating}</p>
      </div>
    </div>
  );
}
