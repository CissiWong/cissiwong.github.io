import React from "react"
import "./index.css"

class Footer extends React.Component {

  render() {
    return (
      <footer className="Footer">
        <div className="contact">
          <h4>Cecilia Wong</h4>
          <a className="email" href="mailto:cissi.wong@gmail.com">cissi.wong@gmail.com</a>
          <a className="phone" href="callto:+46762009902">+46(0)762009902</a>
          <div className="social-icons">
            <a className="github" href="https://github.com/CissiWong" alt="link to github">
              <img src="./icons/github-logo.svg" alt="github logo" />
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/cecilia-wong-3446b346/" alt="link to linkedin">
              <img src="./icons/linkedin-button.svg" alt="linkedin logo" />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
