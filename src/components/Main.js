import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "./Button";
import "./Main.css";
import './Footer.css'
import { animateScroll as scroll } from "react-scroll";

function Main() {
  //testing

    const toggleProjects = () => {
      scroll.scrollTo(1000);
    };

  return (
    <div className="hero-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <h1>Coding For The Future and Now</h1>
      <p>I'm Evan Epperson and I'm a Software Engineer</p>
      <section class="social-media">
        <div class="social-media-wrap-main">
          <div class="social-icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/evanepperson/"
              class="social-icon-link linkedin"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EvanEpperson"
              class="social-icon-link linkedin"
              aria-label="LinkedIn"
            >
              <i class="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={toggleProjects}
        >
          LOOK AT PROJECTS
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
      <section class="social-media">
        <div class="social-media-wrap-main">
          <div class="social-icons">
            <i class="devicon-css3-plain colored social-icon-link-main"></i>
            <i class="devicon-express-original social-icon-link-main"></i>
            <i class="devicon-firebase-plain colored social-icon-link-main"></i>
            <i class="devicon-heroku-line-wordmark social-icon-link-main"></i>
            <i class="devicon-github-original-wordmark social-icon-link-main"></i>
            <i class="devicon-javascript-plain colored social-icon-link-main"></i>
            <i class="devicon-jquery-plain-wordmark social-icon-link-main"></i>
            <i class="devicon-linux-plain social-icon-link-main"></i>
            <i class="devicon-materialui-plain social-icon-link-main"></i>
            <i class="devicon-mongodb-plain-wordmark colored social-icon-link-main"></i>
            <i class="devicon-nodejs-plain social-icon-link-main"></i>
            <i class="devicon-npm-original-wordmark social-icon-link-main"></i>
            <i class="devicon-postgresql-plain-wordmark social-icon-link-main"></i>
            <i class="devicon-rails-plain-wordmark colored social-icon-link-main"></i>
            <i class="devicon-react-original-wordmark colored social-icon-link-main"></i>
            <i class="devicon-ruby-plain-wordmark colored social-icon-link-main"></i>
            <i class="devicon-typescript-plain colored social-icon-link-main"></i>
            <i class="devicon-ubuntu-plain-wordmark colored social-icon-link-main"></i>
            <i class="devicon-visualstudio-plain social-icon-link-main"></i>
            <i class="devicon-yarn-plain social-icon-link-main"></i>


            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/evanepperson/"
              class="social-icon-link linkedin"
              aria-label="LinkedIn"
            >
              <i class="devicon-aftereffects-plain" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EvanEpperson"
              class="social-icon-link linkedin"
              aria-label="LinkedIn"
            >
              <i class="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
