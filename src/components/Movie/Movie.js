import React from "react";
import styles from "./Movie.module.css";
import plcaeholderposter from "../../img/movie-poster-placeholder.png";

const Movie = (props) => {
  const onClickHandler = () => {
    props.onMovieClick(props.imdbID);
  };

  return (
    <section className={styles.movie} onClick={onClickHandler}>
      <div className={styles.image}>
        {props.posterUrl !== "N/A" ? (
          <img src={props.posterUrl} alt={`${props.name}'s poster`} />
        ) : (
          <img src={plcaeholderposter} alt="placeholder poster" />
        )}
      </div>
      <div className={styles.details}>
        <div>{props.name}</div>
        <div className="d-flex justify-content-between align-items-center">
          <div>{props.year}</div>
          <span className={styles.badge}>{props.type}</span>
        </div>
      </div>
    </section>
  );
};

export default Movie;
