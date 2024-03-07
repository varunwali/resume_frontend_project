import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Login from "./components/Auth/login";
import Signup from "./components/Auth/signup";
import Template from "./components/Template/Template";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
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
