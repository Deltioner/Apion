import React from "react";
import "./Home.css";
import arrow from "..//../assets/arr.png"
const Home = () => {
  return (
    <div className="home container" id="home">
      <div className="home-text">
        <h1>
          Empowering <br />
          Innovation <br />
          Through Software <br />
          Development
        </h1>
        <p>
          At Apion we are dedicated to crafting innovative software solutions{" "}
          <br />
          that drive success for our clients. Our mission is to build trust{" "}
          <br />
          through transparency, collaboration, and a commitment to excellence.
        </p>
        <button className="btn">Exoplore more<img src={arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Home;
