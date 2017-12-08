import React from "react"
import "./style.css"
import Project from "../project"

class Home extends React.Component {

  render() {
    return (
      <div className="Home">

        <nav className="navigation">
          <h6>navigation</h6>
        </nav>

        <header className="header">
          <h1>Hello World</h1>
        </header>

        <section className="portfolio-container">
          <Project
            title="Radio"
            objective="fetching API's and setting state in react"
            keyword="API, JavaScript, react"
            image="images/radio.jpg" />
          <Project
            title="Clock"
            objective="fetching API's and setting state in react"
            keyword="API, JavaScript, react"
            image="images/radio.jpg" />
          <Project
            title="FAQ"
            objective="fetching API's and setting state in react"
            keyword="API, JavaScript, react"
            image="images/radio.jpg" />
          <Project
            title="Radio"
            objective="fetching API's and setting state in react"
            keyword="API, JavaScript, react"
            image="images/radio.jpg" />
        </section>

        <footer className="footer">
          <section className="contact">
            <h4>Cecilia Wong</h4>
            <p>cissi.wong@gmail.com</p>
            <p>+46(0)762009902</p>
          </section>

          <section className="social-media">
            <a href="https://www.instagram.com/cissiwong/" target="_none">
              <img src="" alt="instagram icon" />
            </a>
            <a href="https://www.linkedin.com/feed/" target="_none">
              <img src="" alt="linkedin icon" />
            </a>
          </section>
        </footer>

      </div>
    )
  }
}

export default Home
