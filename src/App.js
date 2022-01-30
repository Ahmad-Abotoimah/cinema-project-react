import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import MoviesList from "./components/MoviesList";
import MoviesGrid from "./components/MoviesGrid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <!-- =============== START OF WRAPPER =============== --> */}
        <div className="wrapper">
          <Header />

          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Testimonial" element={<Testimonial />} />
            <Route path="/MoviesList" element={<MoviesList />} />
            <Route path="/MoviesGrid" element={<MoviesGrid />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
