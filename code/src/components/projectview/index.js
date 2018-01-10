import React from "react"
import "./style.css"

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
    // const project = projects.find((p) => {
    //   return p.id === id
    // })

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
      <div>
        <h1>{this.state.project.name}</h1>
        <div className="description">
          {this.state.project.description}
        </div>
      </div>
    )
  }
}
