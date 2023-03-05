import "./Contact.scss";

export default function Contact() {
    return (
        <section id="Contact">
            <h1>Contact</h1>
            <form autoComplete="on">
                <input type="text" name="name" placeholder="Name" spellCheck="false" autoComplete="on"/>
                <input type="email" name="email" placeholder="Email" spellCheck="false" autoComplete="on"/>
                <input type="text" name="subject" placeholder="Subject"/>
                <textarea name="content" placeholder="Content"></textarea>
            </form>
        </section>
    );
}