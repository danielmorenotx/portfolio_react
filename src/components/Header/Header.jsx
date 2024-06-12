import List from "../List/List"
import "./Header.css"

const Header = () => {
    const listObjects = [
        {href: "#about-section", name: "About"},
        {href: "#gallery-section", name: "My Work"},
        {href: "#followme-section", name: "Follow Me"},
        {href: "#contact-section", name: "Contact"},
    ]

    return (
        <section className="heading-nav">
            <h1><img src="./images/Daniel_logo.png" alt="Daniel Moreno" title="Daniel Moreno"/></h1>
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