import React from "react"
import "./style.css"
import Header from "../header"
import Project from "../project"
import Footer from "../footer"

class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <Header />
        <section className="portfolio-wrapper">
          <div className="portfolio-container-one wide" >
            <Project
              title="Radio"
              objective="fetching API's and setting state in react"
              keyword="API, JavaScript, react"
              image="images/radio.jpg" />
          </div>
          <div className="portfolio-container-two tall wide">
            <Project
              title="Christmas Calendar"
              objective="group project creating a Christmas Calendar for Kivra"
              keyword="Html, CSS, JavaScript"
              image="images/group-calendar.png" />
          </div>

          <div className="portfolio-container-three wide">
            <Project
              title="Clock"
              objective="Creating a clock using react"
              keyword="API, JavaScript, react"
              image="images/clock.png" />
          </div>

          <div className="portfolio-container-four wide">
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
