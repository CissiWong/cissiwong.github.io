import React from "react"
import "./style.css"
import Header from "../header"
import Footer from "../footer"
import project_array from "../project_array"

class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <Header />
        <section className="portfolio">
          <main className="portfolio-wrapper">
            <div className="one hoverbox">
              <div className="one">
                <div className="text">
                  <h1>CSS Grid</h1>
                </div>
              </div>
            </div>

            <div className="two hoverbox">
              <div className="two" />
              <div className="text">
                <h1>API & React</h1>
              </div>
            </div>
            <div className="three hoverbox">
              <div className="three" />
              <div className="text">
                <h1>JavaScript</h1>
              </div>
            </div>
            <div className="four hoverbox">
              <div className="four" />
              <div className="text">
                <h1>State in react</h1>
              </div>
            </div>
            <div className="five hoverbox">
              <div className="five" />
              <div className="text">
                <h1>API</h1>
              </div>
            </div>
            <div className="five hoverbox">
              <div className="five" />
              <div className="text">
                <h1>API</h1>
              </div>
            </div>
          </main>
        </section>

        <Footer />
      </div>
    )
  }
}

export default Home
