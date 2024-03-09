import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../index";
import styles from "./auth.module.css";
import loginSvg from "../../assets/login.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://resume-builder-backend-ce97.onrender.com/api/v1/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":
              "https://resume-frontend-project-1.onrender.com",
          },
          withCredentials: true,
          mode: "cors",
          credentials: "include",
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setIsAuthorized(true);
      setIsLoading(true);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false); // Hide loader after registration attempt
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <section className={styles.authPage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Resume Builder</h2>
            <h3>Login to your account</h3>
          </div>
          <form>
            <div className={styles.inputTag}>
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="varun@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className={styles.inputTag}>
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            <Link to={"/signup"}>Signup Now</Link>
          </form>
        </div>
        <div className={styles.banner}>
          <img src={loginSvg} alt="login" />
        </div>
      </section>
    </>
  );
};

function Loader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={styles.loadring}>
      <radialGradient
        id="a12"
        cx=".66"
        fx=".66"
        cy=".3125"
        fy=".3125"
        gradientTransform="scale(1.5)">
        <stop offset="0" stop-color="#6C63FF"></stop>
        <stop offset=".3" stop-color="#6C63FF" stop-opacity=".9"></stop>
        <stop offset=".6" stop-color="#6C63FF" stop-opacity=".6"></stop>
        <stop offset=".8" stop-color="#6C63FF" stop-opacity=".3"></stop>
        <stop offset="1" stop-color="#6C63FF" stop-opacity="0"></stop>
      </radialGradient>
      <circle
        transform-origin="center"
        fill="none"
        stroke="url(#a12)"
        stroke-width="6"
        stroke-linecap="round"
        stroke-dasharray="200 1000"
        stroke-dashoffset="0"
        cx="100"
        cy="100"
        r="70">
        <animateTransform
          type="rotate"
          attributeName="transform"
          calcMode="spline"
          dur="2"
          values="360;0"
          keyTimes="0;1"
          keySplines="0 0 1 1"
          repeatCount="indefinite"></animateTransform>
      </circle>
      <circle
        transform-origin="center"
        fill="none"
        opacity=".2"
        stroke="#6C63FF"
        stroke-width="6"
        stroke-linecap="round"
        cx="100"
        cy="100"
        r="70"></circle>
    </svg>
  );
}

export default Login;
