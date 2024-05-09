
const ProjectCard = (props) => {
    return (
        <a href={props.href} target={props.target}><img src={props.src} alt={props.alt} className={props.className}></img><p>{props.name}</p></a>
    )
}

export default ProjectCard