import { useEffect, useState } from "react";
import MovieDetailData from "../MovieDetailData/MovieDetailData";
import Modal from "./../../UI/Modal";
import styles from "./MovieDetail.module.css";

import placeholderPoster from "./../../../img/movie-poster-placeholder.png";

const MovieDetail = ({ movieData, onModalClose }) => {
  const [poster, setPoster] = useState(movieData.Poster);

  useEffect(() => {
    if (movieData.Poster === "N/A") {
      setPoster(placeholderPoster);
    }
  }, [movieData.Poster]);

  return (
    <Modal onModalClose={onModalClose}>
      <div className={styles.moviedetails}>
        <div className={styles.image}>
          <img src={poster} alt="movie poster"></img>
        </div>
        <div className={styles.moviedetailsdata}>
          <MovieDetailData movieData={movieData} />
        </div>
      </div>
    </Modal>
  );
};

export default MovieDetail;
