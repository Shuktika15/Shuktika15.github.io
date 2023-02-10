import "./Header.scss";

export default function Header() {
    return (
        <header className="rotate-y">
            <div className="container">
                <a href="/#Landing">
                    <h1>Shuktika<span>.</span></h1>
                </a>
                <button className="nav-btn transition">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <nav>
                    <a href="/#AboutMe">
                        <p>About Me</p>
                    </a>
                    <a href="/#Skills">
                        <p>Skills</p>
                    </a>
                    <a href="/#Experiences">
                        <p>Experiences</p>
                    </a>
                    <a href="/#Projects">
                        <p>Projects</p>
                    </a>
                    <a href="/#Hobbies">
                        <p>Hobbies</p>
                    </a>
                </nav>
            </div>
        </header>
    );
}