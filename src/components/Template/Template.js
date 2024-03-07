import React, { useState, useContext, useEffect } from "react";
import templateimage1 from "../../assets/template1.png";
import templateimage2 from "../../assets/template2.png";
import styles from "./Template.module.css";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Context } from "../../index";
function Template() {
  const { selectedImage, setSelectedImage } = useContext(Context);
  useEffect(() => {
    if (selectedImage > 0) {
      toast.success(`Template Selected ${selectedImage}`);
    }
  }, [selectedImage]);

  return (
    <>
      <div className={styles.container}>
        <h3>Choose any one Template</h3>
        <div className={styles.imageContainer}>
          <img
            src={templateimage1}
            alt="template-1"
            onClick={() => setSelectedImage(1)}
          />
          <img
            src={templateimage2}
            alt="template-2"
            onClick={() => setSelectedImage(2)}
          />
          <Link className={styles.link} to={"/body"}>
            Build Resume &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}

export default Template;
