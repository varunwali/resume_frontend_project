import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Login from "./components/Auth/login";
import Signup from "./components/Auth/signup";
import Template from "./components/Template/Template";
import NotFound from "./components/NotFound/NotFound";
import { Context } from "./index";
import axios from "axios";

const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  //fetching the user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://rich-ruby-hippopotamus-ring.cyclic.app/api/v1/user/getuser",
          {
            headers: {
              "Access-Control-Allow-Origin":
                "https://resume-frontend-project-1.onrender.com",
            },
            withCredentials: true,
            mode: "cors",
            credentials: "include",
          }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser(); //calling the fetchUSer function in useeffect hook
  }, [isAuthorized]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Header />} />
          <Route path="/Body" element={<Body />} />
          <Route path="/templates" element={<Template />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
