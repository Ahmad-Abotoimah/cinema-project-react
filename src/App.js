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
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";
import UserProfile from "./components/UserProfile";
import SingleMovie from "./components/SingleMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./components/booking/Book";
// import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <!-- =============== START OF WRAPPER =============== --> */}
        <div className="wrapper">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} forceRefresh={true} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Testimonial" element={<Testimonial />} />
            <Route path="/MoviesList" element={<MoviesList />} />
            <Route path="/MoviesGrid" element={<MoviesGrid />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Book" element={<Book />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/singleMovie" element={<SingleMovie />} />
            <Route path="/Logout" element={<Logout />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
