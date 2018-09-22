import React from "react"
import "./style.css"
import Header from "../header"
import ProjectPreview from "../project-preview"
import Footer from "../footer"

const projectsJson = require("../projects.json")

class HomeView extends React.Component {

  render() {
    return (
      <div className="Home">
        <Header />
        <section className="portfolio">
          <main className="portfolio-wrapper">
            {projectsJson.projects.map(item => {
              return <ProjectPreview
                title={item.title}
                url={item.id}
                language={item.language}
                description={item.description}
                link={item.link}
                image={item.image}
                repository={item.repository} />
            })}
          </main>
        </section>

        <Footer />
      </div>
    )
  }
}

export default HomeView
