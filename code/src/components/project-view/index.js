import React from "react"
import "./style.css"

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
        <section className="pw-images" />
      </div>
    )
  }
}

export default ProjectView
