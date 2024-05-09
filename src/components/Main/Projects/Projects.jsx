import ProjectCard from "../../ProjectCard/ProjectCard"

const Projects = () => {
    const projectCardData = [
        {href:"https://flic.kr/s/aHsmM39enG",target:"_blank", src:"images/iceland_album.jpg", alt:"iceland album", className:"album-cover"},
        {href:"https://flic.kr/s/aHsm84mLjc", target:"_blank", src:"images/pnw_album.jpg", alt:"pnw album", className:"album-cover"},
        {href:"https://flic.kr/s/aHskLtHJNi", target:"_blank", src:"images/iceland_2016.jpg", alt:"Iceland 2016", className:"album-cover"}
    ]

    const projectCardData2 = [

    ]

    return (
        <section id="gallery-section">
            <h2 className="subheaders">Check Out My Work</h2>
            <div className="gallery-info">
                <div className="row">
                {
                projectCardData.map((project, index) => {
                    return (
                    <ProjectCard 
                        key={index}
                        href={project.href}
                        target={project.target}
                        src={project.src}
                        alt={project.alt}
                        className={project.className}/>)})
                }
                </div>
                <div className="row">
                {
                projectCardData.map((project, index) => {
                    return (
                    <ProjectCard 
                        key={index}
                        href={project.href}
                        target={project.target}
                        src={project.src}
                        alt={project.alt}
                        className={project.className}/>)})
                }
                </div>
            </div>
        </section>  
    )
}

export default Projects