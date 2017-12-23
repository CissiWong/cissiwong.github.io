import React from "react"
import "./style.css"
import Project from "../project"

class ProjectView extends React.Component {

  render() {
    return (
      <div className="pw-wrapper">
        <header />
        <section className="pw-text">
          <h6>Header</h6>
          <p>ingress</p>
          <p>Lorem impsum...</p>
        </section>
        <section className="pw-images">
          <img />
          <img />
          <img />
        </section>
      </div>
    )
  }
}

export default ProjectView
