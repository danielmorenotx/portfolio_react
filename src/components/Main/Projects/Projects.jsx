import ProjectCard from "../../ProjectCard/ProjectCard"
import "./Projects.css"

const Projects = () => {
    const projectCardData = [
        {
            href:"https://github.com/danielmorenotx/open_court_app",
            name: "Open Court App"
        },
        {
            href:"https://github.com/danielmorenotx/portfolio_react",
            name: "React Portfolio"
        },
        {
            href:"https://github.com/danielmorenotx/coding_problems",
            name: "Coding Problems"
        }
    ]

    return (
        <section id="gallery-section">
            <h2 className="subheaders">Check Out My Work</h2>
            <div className="gallery-info">
                <div className="row">
                {projectCardData.map((project, index) => {
                        return (
                    <a href={project.href } target="_blank" className="card-link">
                        <p className="project-card">{project.name}</p>
                    </a>)})}
                </div>
            </div>
        </section>  
    )
}

export default Projects