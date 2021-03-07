import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";
import myVideo from "../videos/video-1.mp4";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video controls autoPlay loop muted>
        <source src={myVideo} type="video/mp4"></source>
      </video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
