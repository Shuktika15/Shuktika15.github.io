import "./Hobbies.scss";

export default function Hobbies() {
    return (
        <section id="Hobbies">
            <h1>Hobbies</h1>
            <article className="hobby">
                <h3 className="color-accent">CSS Art</h3>
                <p className="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aliquam cumque, error esse
                    eveniet, facilis fugiat harum illum incidunt laboriosam minus modi molestias natus nihil non optio
                    perferendis quae qui quia quibusdam, quo quod recusandae repudiandae sed sint temporibus.
                </p>
                <div className="collage css-arts">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </article>
            <article className="hobby">
                <h3 className="color-accent">Digital Painting</h3>
                <p className="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aliquam cumque, error esse
                    eveniet, facilis fugiat harum illum incidunt laboriosam minus modi molestias natus nihil non optio
                    perferendis quae qui quia quibusdam, quo quod recusandae repudiandae sed sint temporibus.
                </p>
                <div className="collage digital-paintings">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </article>
        </section>
    );
}