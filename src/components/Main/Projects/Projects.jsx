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
        },
        {
            href:"https://github.com/danielmorenotx/java_dictionary_app",
            name: "Java Dictionary App",
            description: "This was my first Java Project. It allows you to enter words and their definitions. You can then search the words based on different criteria."
        }
    ]

    return (
        <section id="projects-section">
            <h2 className="subheaders">Check Out My Work</h2>
            <div className="projects-info">
                {
                projectCardData.map((project, index) => {
                        return (
                    <a key={index} className="card-link-container" href={project.href } target="_blank" >
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-description">{project.description}</p>
                    </a>)})
                }
            </div>
        </section>  
    )
}

export default Projects