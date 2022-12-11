import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={styles.loading}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
