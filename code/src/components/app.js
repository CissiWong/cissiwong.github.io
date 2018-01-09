import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Home from "./home"
import About from "./about"
import ProjectView from "./project-view"
import Project from "./project"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={ProjectView} />
          <Route path="/projects/:id" component={Project} />
        </div>
      </BrowserRouter>

    )
  }
}

export default App
