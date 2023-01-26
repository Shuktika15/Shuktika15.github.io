import "./Nav.scss";

export default function Nav() {
    return (
        <nav>
            <button className="btn">About Me</button>
            <h3>
                <span>My Works</span>
                <i className="fa-solid fa-chevron-right"></i>
            </h3>
        </nav>
    )
}