import "./Skills.css"

const Skills = () => {
    const skillsCardData = [
        {src: "./images/skills/html.svg", alt: "html", name: "HTML" },
        {src: "./images/skills/css.svg", alt: "css", name: "CSS"},
        {src: "./images/skills/javascript.svg", alt: "javascript", name: "Javascript"},
        {src: "./images/skills/python.svg", alt: "python", name: "Python"},
        {src: "./images/skills/git.svg", alt: "git", name: "git"}
    ]

    const skillsCardData2 = [
        {src: "./images/skills/postgresql.svg", alt: "postgresql", name: "PostgreSQL"},
        {src: "./images/skills/java.svg", alt: "java", name: "Java"},
        {src: "./images/skills/spring.svg", alt: "spring", name: "Spring"},
        {src: "./images/skills/react.svg", alt: "react", name: "React"},
        {src: "./images/skills/tableau.svg", alt: "tableau", name: "Tableau"}
    ]

    const certificateCardData = [
        {href: "https://www.credly.com/badges/83763898-e049-443d-ac0a-9c727b3929f9/public_url", src: "./images/skills/google-data-analytics-professional-certificate.png", alt: "Google Data Analytics Professional Certificate", title: "Google Data Analytics Professional Certificate"},
        {href: "https://www.credly.com/badges/3aeeec27-3e61-4cf3-ae06-9caa230c9833/public_url", src: "./images/skills/tableau-desktop-specialist.png", alt: "Tableau Desktop Specialist", title: "Tableau Desktop Specialist"},
        {href: "https://generalassemb.ly/students/courses/software-engineering-bootcamp", src: "./images/skills/GA-Software-Developer-Certificate-of-Completion-dmoreno.jpg", alt: "General Assembly Software Developer Bootcamp", title: "General Assembly Software Developer Bootcamp"}
    ]

    return (
        <section className="skills-section">
            <h2 className="subheaders">Skills</h2>
            <div className="all-skills">
                <div className="skills">
                    {
                    skillsCardData.map((skill, index) => {
                            return (
                                <div key={index}>
                                    <img className="skill-icon" src={skill.src} alt={skill.alt}/>
                                    <p>{skill.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="skills">
                    {
                    skillsCardData2.map((skill, index) => {
                            return (
                                <div key={index}>
                                    <img src={skill.src} alt={skill.alt} className="skill-icon"/>
                                    <p>{skill.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
            
            <h2 className="subheaders">Certifications</h2>
            
            <div className="certifications">
                {
                certificateCardData.map((certificate, index) => {
                    return (
                        <a href={certificate.href} target="_blank">
                            <img className="badge" key={index} src={certificate.src} alt={certificate.alt} title={certificate.title}/>
                        </a>
                    )
                })
                }
            </div>
        </section>
    )
}

export default Skills;