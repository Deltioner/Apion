import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Contact from "./Components/Contacts/Contact";
import Footer from "./Components/Footer/Footer";
import Project from "./Components/Projects/Project";
import LogSign from "./Components/LogSign/LogSign";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar /> 
            <Home />
            <div className="container">
              <Title subTitle="About us" title="Apion Technology" />
              <About />
              <Title subTitle="Services" title="What We Offer" />
              <Services />
              <Title subTitle="Our Projects" title="Our Latest Innovations" />
              <Project />
              <Title subTitle="Contact Us" title="Get in Touch" />
              <Contact />
              <Footer />
            </div>
          </div>
        } />
        <Route path="LogSign" element={<LogSign />} />
      </Routes>
    </Router>
  );
};

export default App;
