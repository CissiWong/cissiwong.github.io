import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Home from "./home"
import About from "./about"
import ProjectView from "./project-view"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={ProjectView} />
        </div>
      </BrowserRouter>

    )
  }
}

export default App
