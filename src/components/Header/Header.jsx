import List from "../List/List"
import "./Header.css"

const Header = () => {
    const listObjects = [
        {href: "#about-section", name: "About"},
        {href: "#gallery-section", name: "Gallery"},
        {href: "#contact-section", name: "Contact"},
    ]

    return (
        <section className="heading-nav">
            <nav>
                {
                    listObjects.map((list, index) => <List 
                    key={index}
                    href={list.href}
                    name={list.name}/>)
                }
            </nav>
            <h1>Daniel Moreno website</h1>
            <img src="images/me.JPEG" alt="picture of me" id="picture-of-me"></img>
        </section>
    );
};

export default Header;