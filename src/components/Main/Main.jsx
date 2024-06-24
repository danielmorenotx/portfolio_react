import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills"
import FollowMe from "./FollowMe/FollowMe";
import Contact from "./Contact/Contact";
import "./Main.css"

const Main = () => {
    return (
        <main>
            <Skills />
            <Projects />
            <FollowMe />
            <Contact />
        </main>
    );
};

export default Main;