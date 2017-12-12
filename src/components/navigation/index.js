import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class Navigation extends React.Component {

  render() {
    return (
      <div className="navigation">

        <label className="hamburger-mobile" htmlFor="hamburger-menu">
          <div className="bars" id="bar-one" />
          <div className="bars" id="bar-two" />
          <div className="bars" id="bar-three" />
        </label>

        <input className="hamburger-checkbox" id="hamburger-menu" type="checkbox" />
        <ul className="mobile-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navigation
