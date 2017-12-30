import React from "react"
import "./style.css"
import Header from "../header"
import Footer from "../footer"

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

            <div className="two" />
            <div className="three" />
            <div className="four" />
            <div className="five" />
            <div className="six" />
          </main>
        </section>

        <Footer />
      </div>
    )
  }
}

export default Home
