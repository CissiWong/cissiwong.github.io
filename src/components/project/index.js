import React from "react"
import "./style.css"

class Project extends React.Component {

  render() {
    return (
      <section className="Project">
        <div className="project-background">
          <img src={this.props.image} alt="" />
          <div className="project-hover">
            <div className="project-description">
              <h4>{this.props.title}</h4>
              <p>{this.props.objective}</p>
              <p>{this.props.keyword}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Project
