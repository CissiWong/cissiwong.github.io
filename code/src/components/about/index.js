import React from "react"
import "./style.css"
import Navigation from "../navigation"
import Footer from "../footer"
import cissi from "./CissiWong.jpg"
import gitlogo from "./github-logo-blk.svg"

class About extends React.Component {

  render() {
    return (
      <div className="about-container">
        <header>
          <Navigation />
        </header>
        <div className="about-wrapper">
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
              rel="noopener noreferrer">
              <img
                className="github-logo"
                src={gitlogo}
                alt="" />
            </a>
          </div>
          <div className="img-wrapper">
            <img
              className="portrait"
              src={cissi}
              alt="" />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About
