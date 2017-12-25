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
          <div className="one wide tall" />
          <div className="two tall" />
          <div className="three" />
          <div className="four" />
          <div className="five" />
        </main>
        <Footer />
      </div>
    )
  }
}

export default Home
