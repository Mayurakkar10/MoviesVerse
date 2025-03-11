import React, { useState } from "react";

export default function Pagination(props) {
  const [page, setPage] = useState(1);
  props.takePage(page);
  return (
    <div
      className="container d-flex p-2"
      style={{ justifyContent: "space-between" }}
    >
      {page > 1 ? (
        <button
          className="btn btn-dark"
          style={{ width: "5rem" }}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </button>
      ) : (
        <button disabled className="btn btn-dark">
          Prev
        </button>
      )}
      <p className="text-white">{page}</p>
      {page < 20 ? (
        <button
          className="btn btn-dark"
          style={{ width: "5rem" }}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      ) : (
        <button disabled className="btn btn-dark">
          Next
        </button>
      )}
    </div>
  );
}
