import React from "react";
import notfound from "../../assets/notfound.png";
import styles from "./Notfound.module.css";
const NotFound = () => {
  return (
    <>
      <section className={styles.notfound}>
        <div className={styles.content}>
          <img src={notfound} alt="notfound" />
        </div>
      </section>
    </>
  );
};

export default NotFound;
