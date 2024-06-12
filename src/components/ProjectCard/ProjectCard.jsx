
const ProjectCard = (props) => {
    return (
        <a href={props.href } target={props.target}>
            {/* className="project-card" */}
            <div className={props.className}>
                <p>{props.name}</p>
            </div>
        </a>
    )
}

export default ProjectCard