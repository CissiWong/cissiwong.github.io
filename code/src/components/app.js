import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import HomeView from "./homeview"
import About from "./about"
// import ProjectPreview from "./project-preview"
import ProjectView from "./projectview"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={HomeView} />
          <Route path="/about" component={About} />
          {/* <Route path="/work" component={ProjectView} /> */}
          <Route path="/projects/:id" component={ProjectView} />
        </div>
      </BrowserRouter>

    )
  }
}

export default App
