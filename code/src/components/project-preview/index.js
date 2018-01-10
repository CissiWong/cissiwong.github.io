import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
// import Project from "../project"

class ProjectPreview extends React.Component {

  render() {
    return (
      <div className="project-container">
        <Link to={`/projects/${this.props.url}`}>
          <div className="one hoverbox">
            <img src={this.props.image} alt="" />
            {/* <div className="one"> */}
            <div className="text">
              <h1>{this.props.title}</h1>
            </div>
          </div>
          {/* </div> */}
        </Link>
      </div>
    )
  }
}

export default ProjectPreview
