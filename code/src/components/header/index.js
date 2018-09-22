import React from "react"
import "./style.css"
import Navigation from "../navigation"

export default class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <span className="logo" />
        <Navigation />
      </header>
    )
  }
}
