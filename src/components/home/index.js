import React from "react"
import "./style.css"

class Home extends React.Component {

  render() {
    return (
      <div ClassName="Home">

        <nav className="navigation">
          <h4>navigation</h4>
        </nav>

        <header className="header">
          <h1>Hello World!</h1>
        </header>

        <section className="portfolio-container">
          <section className="portfolio-one">
            <div className="overlay">
              <div className="project" id="first">
                <h4>title</h4>
                <p>text about the project</p>
              </div>
            </div>
            <div className="overlay">
              <div className="project" id="second">
                <h4>title</h4>
                <p>text about the project</p>
              </div>
            </div>
          </section>

        <section className="portfolio-two">


          </section>
        </section>

        <footer></footer>

      </div>
    )
  }
}

export default Home
