import "./Landing.scss";
import React, {useEffect, useRef} from "react";

export default function Landing() {
    let profiles = useRef(null);
    let resumeBtn = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                resumeBtn.current?.classList.toggle("appear", !entry.isIntersecting);
            }
        }, {
            threshold: 1
        });
        observer.observe(profiles.current!);
    }, []);

    return (
        <section id="Landing">
            <div className="portrait fade-in-expand"></div>
            <div className="myself">
                <h1 className="slide-in" style={{animationDelay: '500ms'}}>
                    Hey I'm
                    <br/>
                    Shuktika Mahanty
                </h1>
                <p className="reveal-vertical" style={{animationDelay: '1.5s'}}>
                    I’m a Web developer & I’m very passionate and dedicated to my work.
                    I have acquired the skills and knowledge necessary to make your project
                    a success.
                </p>
                <div className="socials" ref={profiles}>
                    <a
                        href="https://github.com/Shuktika15"
                        aria-label="GitHub"
                        className="fade-in"
                        style={{animationDelay: '2.5s', animationDuration: '200ms'}}
                        data-tooltip="GitHub"
                    >
                        <img src="/icons/github.svg" alt="GitHub"/>
                    </a>
                    <a
                        href="https://in.linkedin.com/in/shuktika-mahanty"
                        aria-label="LinkedIn"
                        className="fade-in"
                        style={{animationDelay: '2.7s', animationDuration: '200ms'}}
                        data-tooltip="LinkedIn"
                    >
                        <img src="/icons/linkedin.svg" alt="LinkedIn"/>
                    </a>
                    <a
                        href="https://www.facebook.com/ShuktikaMahanty"
                        aria-label="Facebook"
                        className="fade-in"
                        style={{animationDelay: '2.9s', animationDuration: '200ms'}}
                        data-tooltip="Facebook"
                    >
                        <img src="/icons/facebook.svg" alt="Facebook"/>
                    </a>
                    <a
                        href="https://www.instagram.com/shuktikamahanty"
                        aria-label="Instagram"
                        className="fade-in"
                        style={{animationDelay: '3.1s', animationDuration: '200ms'}}
                        data-tooltip="Instagram"
                    >
                        <img src="/icons/instagram.svg" alt="Instagram"/>
                    </a>
                    <a
                        href="https://pinterest.com/shuktikam"
                        aria-label="Pinterest"
                        className="fade-in"
                        style={{animationDelay: '3.3s', animationDuration: '200ms'}}
                        data-tooltip="Pinterest"
                    >
                        <img src="/icons/pinterest.svg" alt="Pinterest"/>
                    </a>
                    <a
                        href="https://leetcode.com/shukti"
                        aria-label="LeetCode"
                        className="fade-in"
                        style={{animationDelay: '3.5s', animationDuration: '200ms'}}
                        data-tooltip="LeetCode"
                    >
                        <img src="/icons/leetcode.svg" alt="LeetCode"/>
                    </a>
                </div>
                <a href="#" className="download-resume color-accent">
                    <p style={{animationDelay: '4.5s'}}>Download Resume</p>
                    <i
                        className="fa-solid fa-angle-right fade-in"
                        style={{animationDelay: '4s', animationDuration: '500ms'}}
                    ></i>
                </a>
            </div>
            <a
                href="#"
                className="download-resume-fab transition disappear"
                data-tooltip="Download Resume"
                data-tooltip-position="left"
                ref={resumeBtn}
            >
                <i className="fa-solid fa-file-arrow-down"></i>
            </a>
        </section>
    )
}
