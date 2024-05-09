import ProjectCard from "../../ProjectCard/ProjectCard";

const Skills = () => {
    const cardData = [
        {src: "./images/skills/html.svg", alt: "html", name: "HTML" ,className: "skills"},
        {src: "./images/skills/css.svg", alt: "css", name: "CSS",className: "skills"},
        {src: "./images/skills/javascript.svg", alt: "javascript", name: "Javascript",className: "skills"},
        {src: "./images/skills/python.svg", alt: "python", name: "Python",className: "skills"},
        {src: "./images/skills/git.svg", alt: "git", name: "git",className: "skills"},
        {src: "./images/skills/postgresql.svg", alt: "postgresql", name: "PostgreSQL", className: "skills"},
        {src: "./images/skills/java.svg", alt: "java", name: "Java",className: "skills"},
        {src: "./images/skills/spring.svg", alt: "spring", name: "Spring",className: "skills"},
        {src: "./images/skills/react.svg", alt: "react", name: "React",className: "skills"}
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
            <div className="row">
                {

                }
            </div>
        </section>
    )
}

export default Skills;