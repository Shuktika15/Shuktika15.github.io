import "./Contact.scss";
import {FormEvent, useRef} from "react";

export default function Contact() {
    const form = useRef<HTMLFormElement | null>(null);

    function sendEmail(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <section id="Contact">
            <h1>Contact</h1>
            <form autoComplete="on" onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Name" spellCheck="false" autoComplete="on" required/>
                <input type="email" name="email" placeholder="Email" spellCheck="false" autoComplete="on" required/>
                <input type="text" name="subject" placeholder="Subject" required/>
                <textarea name="content" placeholder="Content" required></textarea>
                <button type="submit" className="btn">Send</button>
            </form>
        </section>
    );
}