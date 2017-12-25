import React from "react"
import "./style.css"
import Header from "../header"
import Footer from "../footer"

class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <Header />
        <main className="portfolio-wrapper">
          <div className="one tall wide" />
          <div className="two" />
          <div className="three">3</div>
          <div className="four">4</div>
          <div className="five">5</div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Home
