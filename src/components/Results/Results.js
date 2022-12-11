import React from "react";
import Movie from "../Movie/Movie";
import styles from "./Results.module.css";

const Results = (props) => {

  let mappedMovies;
  mappedMovies = props.movies.map((movie) => {
    return (
      <Movie
        name={movie.Title}
        posterUrl={movie.Poster}
        year={movie.Year}
        type={movie.Type}
        imdbID={movie.imdbID}
        key={Math.random().toString()}
        onMovieClick={props.onMovieClick}
      />
    );
  });

  return <div className={styles.movies}>{mappedMovies}</div>;
};

export default Results;
