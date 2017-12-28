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
        </div>
      </footer>
    )
  }
}

export default Footer
