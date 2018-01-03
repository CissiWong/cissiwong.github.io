import React from "react"
import NewNav from "components/new-navigation"
import "./style.css"
// import Navigation from "../navigation"

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
