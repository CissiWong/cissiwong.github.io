import React from "react"
import "./style.css"
import Navigation from "../navigation"
import Footer from "../footer"
import cissi from "./CissiWong.jpg"
import gitlogo from "./github-logo-blk.svg"
import cv from "./cv-symbol.svg"

class About extends React.Component {

  render() {
    return (
      <div className="about-container">
        <header className="about-header">
          <Navigation />
        </header>
        <div className="about-wrapper">
          <div className="img-wrapper">
            <img
              className="portrait"
              src={cissi}
              alt="" />
          </div>
          <div className="about-description">
            <h1>Cecilia Wong</h1>
            <p>Curious, focused and positive individual with proven excellent
              communication skills.
              <br />
              My years as self employed and in managing positions have
              afforded me maturity and taught me to manage my time efficiently.
              <br /> I am currently enrolled in a bootcamp by the pop-up school Technigo,
              studying JavaScript and React and aspiring to become a front end developer.
            </p>
            <a
              className="github-link"
              href="https://github.com/CissiWong"
              target="_blank"
              rel="noopener noreferrer" >
              <img
                className="github-logo"
                src={gitlogo}
                alt="" />
            </a>
            <a
              className="cv-link"
              href="./CV_Cecilia_Wong.pdf"
              download >
              <img
                className="cv"
                src={cv}
                alt="" />
            </a>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About
