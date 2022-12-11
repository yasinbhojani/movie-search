// Directors, Writers, Actors

import React from "react";

const MovieMiscData = ({movieData}) => {
  return (
    <>
      <div>
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          Directors:{" "}
        </span>
        {movieData.Director}
      </div>
      <hr />
      <div>
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          Writers:{" "}
        </span>
        {movieData.Writer}
      </div>
      <hr />
      <div>
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          Actors:{" "}
        </span>
        {movieData.Actors}
      </div>
    </>
  );
};

export default MovieMiscData;
