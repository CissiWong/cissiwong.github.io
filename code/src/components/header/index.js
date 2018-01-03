import React from "react"
import "./style.css"
// import Navigation from "../navigation"
import NewNav from "../new_navigation"

export default class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <span className="logo" />
        <NewNav />

        {/* <Navigation /> */}
      </header>
    )
  }
}
