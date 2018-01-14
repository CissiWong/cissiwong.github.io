import React from "react"
import "./style.css"
import Navigation from "../navigation"
import Footer from "../footer"
import ghlogo from "./github-logo-blk.svg"

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
          <div className="image-box">
            <div
              className="project-view-image"
              style={{ backgroundImage: `url(${this.state.project.image})` }} />
          </div>
          <div className="project-view-description">
            <h1>{this.state.project.title}</h1>
            <br />
            <h4>{this.state.project.language}</h4>
            <p>{this.state.project.description}</p>
            <a
              className="github-link"
              href={this.state.project.repository}
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="github-logo"
                src={ghlogo}
                alt="" />
            </a>
          </div>

        </main>
        <Footer />
      </section>
    )
  }
}
