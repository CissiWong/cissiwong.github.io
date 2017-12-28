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

          <div className="one image wide" />
          <div className="two image tall" />
          <div className="three image wide" />
          <div className="four image" />
          <div className="five image wide" />

        </main>
        <Footer />
      </div>
    )
  }
}

export default Home
