import "./Header.css"

const Header = () => {
    return (
        <section className="heading-nav">
            <nav>
                <div><a href="#home-section">Home</a></div>
                <div><a href="#gallery-section">Gallery</a></div>
                <div><a href="#about-section">About</a></div>
                <div><a href="#contact-section">Contact</a></div>
            </nav>
            <h1>Daniel Moreno website</h1>
            <img src="images/me.JPEG" alt="picture of me" id="picture-of-me"></img>
        </section>
    );
};

export default Header;