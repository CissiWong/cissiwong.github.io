import React from "react"
import "./style.css"
import Navigation from "../navigation"

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Navigation />
        <div className="title-one"><h1>Hello</h1></div>
        <div className="title-two"><h1>World!</h1></div>
        <div className="social-icons">
          <a className="github" href="https://github.com/CissiWong" alt="link to github">
            <img src="./icons/github-logo.svg" alt="github logo" />
          </a>
          <a className="linkedin" href="https://www.linkedin.com/in/cecilia-wong-3446b346/" alt="link to linkedin">
            <img src="./icons/linkedin-button.svg" alt="linkedin logo" />
          </a>
        </div>
      </header>
    )
  }
}
