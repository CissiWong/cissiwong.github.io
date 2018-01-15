import React from "react"
// import { BrowserRouter, Route } from "react-router-dom"
import { HashRouter, Route } from "react-router-dom"

import HomeView from "./homeview"
import About from "./about"
// import Contact from "./contact"
// import ProjectPreview from "./project-preview"
import ProjectView from "./projectview"

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/" exact component={HomeView} />
          <Route path="/about" component={About} />
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/projects/:id" component={ProjectView} />
        </div>
      </HashRouter>

    )
  }
}

export default App
