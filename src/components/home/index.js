import React from "react"
import "./style.css"
import Project from "../project"
import Navigation from "../navigation"
import Footer from "../footer"

class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <header className="header">
          <Navigation />
          <div className="title-one"><h1>Hello</h1></div>
          <div className="title-two"><h1>World!</h1></div>
          <div className="social-icons">
            <a className="github" href="https://github.com/CissiWong" alt="link to github">
              <img src="./icons/github-logo.svg" alt="github logo" />
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/cecilia-wong-3446b346/" alt="link to linkedin">
              <img src="./icons/linkedin-button.svg" alt="linkedin logo" />
            </a>
          </div>
        </header>

        <section className="portfolio-wrapper">
          <div className="portfolio-container-one">
            <Project
              title="Radio"
              objective="fetching API's and setting state in react"
              keyword="API, JavaScript, react"
              image="images/radio.jpg" />
          </div>
          <div className="portfolio-container-two">
            <Project
              title="Christmas Calendar"
              objective="group project creating a Christmas Calendar for Kivra"
              keyword="Html, CSS, JavaScript"
              image="images/group-calendar.png" />
          </div>

          <div className="portfolio-container-three">
            <Project
              title="Clock"
              objective="Creating a clock using react"
              keyword="API, JavaScript, react"
              image="images/clock.png" />
          </div>

          <div className="portfolio-container-four">
            <Project
              title="FAQ"
              objective="expanding the view by toggeling classes in JavaScript"
              keyword="Html, CSS, JavaScript"
              image="images/FAQ.png" />
          </div>

        </section>
        <Footer />
      </div>
    )
  }
}

export default Home
