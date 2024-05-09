import ProjectCard from "../../ProjectCard/ProjectCard";

const Skills = () => {
    const cardData = [
        {src: "./images/skills/html.svg", alt: "html", name: "HTML" , className: "skill"},
        {src: "./images/skills/css.svg", alt: "css", name: "CSS", className: "skill"},
        {src: "./images/skills/javascript.svg", alt: "javascript", name: "Javascript", className: "skill"},
        {src: "./images/skills/python.svg", alt: "python", name: "Python", className: "skill"},
        {src: "./images/skills/git.svg", alt: "git", name: "git", className: "skill"},
        {src: "./images/skills/postgresql.svg", alt: "postgresql", name: "PostgreSQL", className: "skill"},
        {src: "./images/skills/java.svg", alt: "java", name: "Java", className: "skill"},
        {src: "./images/skills/spring.svg", alt: "spring", name: "Spring", className: "skill"},
        {src: "./images/skills/react.svg", alt: "react", name: "React", className: "skill"}
    ]

    return (
        <section>
            <h2 className="subheaders">Skills</h2>
            <div className="row">
                {
                    cardData.map((card, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                src={card.src}
                                alt={card.alt}
                                name={card.name}
                                className={card.className}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Skills;