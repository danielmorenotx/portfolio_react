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
            <h1>Daniel Moreno</h1>
            <nav>
                {
                    listObjects.map((list, index) => <List 
                    key={index}
                    href={list.href}
                    name={list.name}/>)
                }
            </nav>
        </section>
    );
};

export default Header;