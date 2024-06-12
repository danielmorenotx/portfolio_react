import "./Projects.css"

const Projects = () => {
    const projectCardData = [
        {
            href:"https://github.com/danielmorenotx/open_court_app",
            name: "Open Court App",
            description: "This was my final project in my coding bootcamp. It is an online app to connect tennis players with each other. Check out the code here!"
        },
        {
            href:"https://github.com/danielmorenotx/portfolio_react",
            name: "React Portfolio",
            description: "Want to see how I made this very site you're on? Check it out here!"
        },
        {
            href:"https://github.com/danielmorenotx/coding_problems",
            name: "Coding Problems",
            description: "If you're having trouble solving some coding problems, you can use my answers as a guide."
        }
    ]

    return (
        <section id="gallery-section">
            <h2 className="subheaders">Check Out My Work</h2>
            <div className="gallery-info">
                <div className="row">
                {projectCardData.map((project, index) => {
                        return (
                    <a key={index} href={project.href } target="_blank" className="card-link-container">
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-description">{project.description}</p>
                    </a>)})}
                </div>
            </div>
        </section>  
    )
}

export default Projects