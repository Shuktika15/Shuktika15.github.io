import "./Landing.scss";
import React, {useEffect, useRef} from "react";

export default function Landing() {
    let profiles = useRef(null);
    let resumeBtn = useRef<HTMLAnchorElement | null>(null);
    const animationStart = 6;

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
            <div className="blank"></div>
            <img
                src="/images/me.webp"
                alt="Me"
                className="portrait fade-in-expand"
                style={{animationDelay: `${animationStart}s`}}
            />
            <div className="myself">
                <h1 className="slide-in" style={{animationDelay: `${animationStart + 0.5}s`}}>
                    Hey I'm
                    <br/>
                    Shuktika Mahanty
                </h1>
                <p className="introduction reveal-vertical" style={{animationDelay: `${animationStart + 1.5}s`}}>
                    I'm a full stack developer committed to achieving exceptional results through my passion for coding.
                    My well-rounded expertise enable me to deliver efficient projects that meet the
                    desired specifications.
                </p>
                <div className="socials" ref={profiles}>
                    <a
                        href="https://github.com/Shuktika15"
                        aria-label="GitHub"
                        className="fade-in"
                        style={{animationDelay: `${animationStart + 2.5}s`, animationDuration: '200ms'}}
                        data-tooltip="GitHub"
                        target="_blank"
                    >
                        <img src="/icons/github.svg" alt="GitHub"/>
                    </a>
                    <a
                        href="https://in.linkedin.com/in/shuktika-mahanty"
                        aria-label="LinkedIn"
                        className="fade-in"
                        style={{animationDelay: `${animationStart + 2.7}s`, animationDuration: '200ms'}}
                        data-tooltip="LinkedIn"
                        target="_blank"
                    >
                        <img src="/icons/linkedin.svg" alt="LinkedIn"/>
                    </a>
                    <a
                        href="https://www.facebook.com/ShuktikaMahanty"
                        aria-label="Facebook"
                        className="fade-in"
                        style={{animationDelay: `${animationStart + 2.9}s`, animationDuration: '200ms'}}
                        data-tooltip="Facebook"
                        target="_blank"
                    >
                        <img src="/icons/facebook.svg" alt="Facebook"/>
                    </a>
                    <a
                        href="https://www.instagram.com/shuktikamahanty"
                        aria-label="Instagram"
                        className="fade-in"
                        style={{animationDelay: `${animationStart + 3.1}s`, animationDuration: '200ms'}}
                        data-tooltip="Instagram"
                        target="_blank"
                    >
                        <img src="/icons/instagram.svg" alt="Instagram"/>
                    </a>
                    <a
                        href="https://pinterest.com/shuktikam"
                        aria-label="Pinterest"
                        className="fade-in"
                        style={{animationDelay: `${animationStart + 3.3}s`, animationDuration: '200ms'}}
                        data-tooltip="Pinterest"
                        target="_blank"
                    >
                        <img src="/icons/pinterest.svg" alt="Pinterest"/>
                    </a>
                    <a
                        href="https://leetcode.com/shukti"
                        aria-label="LeetCode"
                        className="fade-in"
                        style={{animationDelay: `${animationStart + 3.5}s`, animationDuration: '200ms'}}
                        data-tooltip="LeetCode"
                        target="_blank"
                    >
                        <img src="/icons/leetcode.svg" alt="LeetCode"/>
                    </a>
                </div>
                <a href="/documents/resume.pdf" target="_blank" className="download-resume color-accent">
                    <p style={{animationDelay: `${animationStart + 4.5}s`}}>Download Resume</p>
                    <span
                        className="download-arrow material-icons-round fade-in"
                        style={{animationDelay: `${animationStart + 4}s`, animationDuration: '500ms'}}
                    >navigate_next</span>
                </a>
            </div>
            <a
                href="/documents/resume.pdf"
                target="_blank"
                className="download-resume-fab transition disappear"
                data-tooltip="Download Resume"
                data-tooltip-position="left"
                ref={resumeBtn}
            >
                <span className="material-icons-round">file_download</span>
            </a>
        </section>
    )
}
