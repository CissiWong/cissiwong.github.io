import React from "react"
import "./style.css"
import Project from "../project"

class Home extends React.Component {

  render() {
    return (
      <div className="Home">

        <nav className="navigation">
          <h4>navigation</h4>
        </nav>

        <header className="header">
          <h1>Hello World!</h1>
        </header>

        <section className="portfolio-container">
          <Project />
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
