import React from "react"
import "./style.css"

class Project extends React.Component {

  render() {
    return (

      <div className="project-wrapper">
        <div className="project-image">
          <img src={this.props.image} alt="" />
        </div>
        <div className="overlay">
          <h3>{this.props.title}</h3>
          <p>{this.props.objective}</p>
          <p>{this.props.keyword}</p>
        </div>
      </div>
    )
  }
}

export default Project
