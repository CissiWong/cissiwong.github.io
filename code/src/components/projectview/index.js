import React from "react"
import "./style.css"
import Navigation from "../navigation"
import Footer from "../footer"

const projectsJson = require("../projects.json")

export default class ProjectView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      project: {}
    }
  }
  componentDidMount() {
    console.log(projectsJson)
    const project = projectsJson.projects.find(p => (p.id === this.props.match.params.id))

    this.setProject(project)
  }

  setProject = project => {
    // if no project, redirect to a "not found" page
    this.setState({
      project
    })
  }

  render() {
    return (
      <section className="project-view-container">
        <header>
          <Navigation />
        </header>
        <main className="project-view-wrapper" >
          <div className="project-view-description">
            <h1>{this.state.project.title}</h1>
            <p>{this.state.project.description}</p>
          </div>
          <div className="image-box">
            <div
              className="project-view-image"
              style={{ backgroundImage: `url(${this.state.project.image})` }} />
          </div>
        </main>
        <Footer />
      </section>
    )
  }
}
