import "./Projects.scss";

export default function Projects() {
    return (
        <section id="Projects">
            <h1>Projects</h1>
            <article className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <h3 className="color-accent">Pension Management System</h3>
                    <p className="content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos fuga fugit maiores
                        mollitia neque nostrum praesentium quisquam quo sequi voluptatem.
                    </p>
                </div>
            </article>
            <article className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <h3 className="color-accent">Airline Management System</h3>
                    <p className="content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos fuga fugit maiores
                        mollitia neque nostrum praesentium quisquam quo sequi voluptatem.
                    </p>
                </div>
            </article>
        </section>
    );
}