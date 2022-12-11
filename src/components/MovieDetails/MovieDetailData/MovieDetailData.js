import React from "react";
import MovieGenre from "../MovieGenre/MovieGenre";
import MovieMiscData from "../MovieMiscData/MovieMiscData";
import MovieRatings from "../MovieRatings/MovieRatings";
import styles from "./MovieDetailData.module.css";

const MovieDetailData = ({ movieData }) => {
  const genre = movieData.Genre.split(", ").map((genre) => {
    return <MovieGenre genre={genre} key={Math.random().toString()}/>;
  });

  return (
    <div className={styles["moviedetailsdata--container"]}>
      <h2>{movieData.Title}</h2>
      <div className={styles.meta}>
        {movieData.Released} • {movieData.Runtime} • {movieData.Rated}
      </div>
      <div className={styles.description}>{movieData.Plot}</div>
      <hr />
      <div className={styles.genre}>{genre}</div>
      <hr />
      <MovieMiscData movieData={movieData} />
      <MovieRatings ratings={movieData.Ratings}/>
    </div>
  );
};

export default MovieDetailData;
