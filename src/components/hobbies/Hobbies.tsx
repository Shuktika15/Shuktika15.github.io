import "./Hobbies.scss";

export default function Hobbies() {
    type ImageProp = {name: string}
    const CSSArt = (props: ImageProp) => {
        return <img loading="lazy" src={`/images/css-arts/${props.name}.jpg`} alt={props.name}/>
    }
    const DigitalPainting = (props: ImageProp) => {
        return <img loading="lazy" src={`/images/digital-paintings/${props.name}.jpg`} alt={props.name}/>
    }

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
                    <div><CSSArt name="1"/></div>
                    <div><CSSArt name="3"/></div>
                    <div><CSSArt name="2"/></div>
                    <div><CSSArt name="4"/></div>
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
                    <div><DigitalPainting name="3"/></div>
                    <div><DigitalPainting name="5"/></div>
                    <div><DigitalPainting name="13"/></div>
                    <div><DigitalPainting name="11"/></div>
                    <div><DigitalPainting name="6"/></div>
                    <div><DigitalPainting name="12"/></div>
                    <div><DigitalPainting name="14"/></div>
                    <div><DigitalPainting name="15"/></div>
                    <div><DigitalPainting name="4"/></div>
                </div>
            </article>
        </section>
    );
}