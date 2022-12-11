import React from "react";
import Rating from "../Rating/Rating";
import styles from "./MovieRatings.module.css";

const MovieRatings = ({ ratings }) => {
  const mappedRatings = ratings.map((rating) => {
    return (
      <Rating
        source={rating.Source}
        value={rating.Value}
        key={Math.random().toString()}
      />
    );
  });

  return (
    <div className={styles.ratings}>
      <span
        style={{
          fontWeight: "bold",
        }}
      >
        Ratings:
      </span>
      <div className={styles.rating}>{mappedRatings}</div>
    </div>
  );
};

export default MovieRatings;
