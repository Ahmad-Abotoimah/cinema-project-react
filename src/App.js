import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import MoviesList from "./components/MoviesList";
import MoviesGrid from "./components/MoviesGrid";
import UserProfile from "./components/UserProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <!-- =============== START OF WRAPPER =============== --> */}
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/Home" element={<Home />} forceRefresh={true} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Testimonial" element={<Testimonial />} />
            <Route path="/MoviesList" element={<MoviesList />} />
            <Route path="/MoviesGrid" element={<MoviesGrid />} />
            <Route path="/UserProfile" element={<UserProfile />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
