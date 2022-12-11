import React, { useEffect } from "react";
import styles from "./Modal.module.css";
import closeSVG from "./../../img/close-btn.svg";

const Modal = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div className={styles.backdrop} onClick={props.onModalClose}></div>
      <div className={`container ${styles["overlay-container"]}`}>
        <div className={styles.overlay}>
          <div className={styles.closebtn}>
            <img
              src={closeSVG}
              alt="close button"
              onClick={props.onModalClose}
            />
          </div>
          <section>{props.children}</section>
        </div>
      </div>
    </>
  );
};

export default Modal;
