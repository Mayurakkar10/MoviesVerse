import React from "react";

export default function Footer() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "black", color: "white", height: "5rem" }}
    >
      <div className="container" style={{ backgroundColor: "black" }}>
        <p
          style={{
            lineHeight: "5rem",
            backgroundColor: "black",
            color: "gray",
            textAlign: "center",
          }}
        >
          &copy; MoviesVerse
        </p>
      </div>
    </div>
  );
}
