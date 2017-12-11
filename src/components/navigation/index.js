import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class Navigation extends React.Component {

  render() {
    return (
      <div className="navigation">
        <div className="nav-one">
          <Link className="one" to="/">Home</Link>
          <Link className="two" to="/work">Work</Link>
        </div>

        <div className="nav-two">
          <Link className="three" to="/about">About</Link>
          <Link className="four" to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
}

export default Navigation
