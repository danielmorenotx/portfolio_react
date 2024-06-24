import "./About.css"

const About = () => {
    return (
        <section id="about-section">
            <div className="about-info">
                <h2 className="subheaders">About Me</h2>
                <p>
                    Daniel is a software developer apprentice at Indeed, currently participating in Indeed's pilot Boost Apprenticeship Program. Prior to this, he dedicated nearly nine years to the Trust & Safety team at Indeed, where he excelled in various roles.
                </p>
                <p>
                    In his final position within the Trust & Safety team, Daniel developed a keen interest in data extraction and visualization. Driven by this newfound passion, he self-taught SQL and Tableau, earning the Tableau Desktop Specialist Certificate. Leveraging these skills, he identified data redundancies and streamlined processes within his team.
                </p>
                <p>
                    Eager to further enhance his technical capabilities, Daniel enrolled in the Google Data Analytics Professional course offered by Coursera, a rigorous six-month program. Upon completion, his enthusiasm for data analytics deepened, prompting him to learn Pandas to bolster his qualifications as a data analyst.
                </p>
                <p>
                    It was during this period that Indeed launched its pilot apprenticeship program. After successfully applying, Daniel decided to pivot towards software development, a field that seamlessly integrates his passion for data analytics. Recently, he completed General Assembly's Software Engineering bootcamp, gaining proficiency in Java and React.
                </p>
                <p>
                    Daniel is excited to continue applying his diverse skill set at Indeed and is enthusiastic about pursuing side projects that he is now empowered to create.
                </p>
            </div>
            <img src="images/picture_of_me.jpg" alt="Picture of me" className="about-picture"></img>
        </section>
    )
}

export default About;
