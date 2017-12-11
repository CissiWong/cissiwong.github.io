import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class Navigation extends React.Component {

  render() {
    return (
      <div className="navigation">
        <div className="nav-one">
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
        </div>

        <div className="nav-two">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
}

export default Navigation
