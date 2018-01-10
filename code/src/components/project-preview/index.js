import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
// import Project from "../project"

class ProjectPreview extends React.Component {

  render() {
    return (
      <div className="project-container" style={{ backgroundImage: `url(${this.props.image})` }}>
        <Link to={`/projects/${this.props.url}`}>
          <div className="hoverbox">
            <div className="text">
              <h1>{this.props.title}</h1>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default ProjectPreview
