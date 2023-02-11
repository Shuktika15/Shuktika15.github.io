import "./Hobbies.scss";

export default function Hobbies() {
    type ImageProp = {name: string, image: string}
    const CSSArt = (props: ImageProp) => {
        return <img loading="lazy" src={`/images/css-arts/${props.image}.jpg`} alt={props.name}/>
    }
    const DigitalPainting = (props: ImageProp) => {
        return <img loading="lazy" src={`/images/digital-paintings/${props.image}.jpg`} alt={props.name}/>
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
                    <div><CSSArt name="Eye" image="eye"/></div>
                    <div><CSSArt name="Santa" image="santa"/></div>
                    <div><CSSArt name="Red" image="red"/></div>
                    <div><CSSArt name="Butterfly" image="butterfly"/></div>
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
                    <div><DigitalPainting name="Shuktikam" image="shuktikam"/></div>
                    <div><DigitalPainting name="Girl and the Cat" image="girl-and-the-cat"/></div>
                    <div><DigitalPainting name="Dawn" image="dawn"/></div>
                    <div><DigitalPainting name="Swirl" image="swirl"/></div>
                    <div><DigitalPainting name="Flower" image="flower"/></div>
                </div>
            </article>
        </section>
    );
}