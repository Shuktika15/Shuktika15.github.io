import "./Header.scss";
import {useEffect, useRef, useState} from "react";

export default function Header() {
    type anchor = {
        title: string,
        href: string
    }

    const anchors: anchor[] = [
        {
            title: 'About Me',
            href: 'AboutMe'
        },
        {
            title: 'Skills',
            href: 'Skills'
        },
        {
            title: 'Experiences',
            href: 'Experiences'
        },
        {
            title: 'Projects',
            href: 'Projects'
        },
        {
            title: 'Hobbies',
            href: 'Hobbies'
        }
    ];
    const navPopup = useRef<HTMLDivElement | null>(null);
    const popupOverlay = useRef<HTMLDivElement | null>(null);
    const [navPopupOpened, setNavPopupOpened] = useState<boolean>(false);
    const animationStarts = 6000;

    useEffect(() => {
        navPopup.current!.classList.toggle('open', navPopupOpened);
        popupOverlay.current!.classList.toggle("overlay-visible", navPopupOpened);
    }, [navPopupOpened]);

    function closeNavPopup() {
        setNavPopupOpened((value) => !value);
    }

    return (
        <div id="Header">
            <div className="overlay" ref={popupOverlay} onClick={closeNavPopup}></div>
            <header className="rotate-y" style={{animationDelay: `${animationStarts}ms`}}>
                <div className="container">
                    <a href="/#Landing">
                        <h1>Shuktika<span>.</span></h1>
                    </a>
                    <button className="nav-btn transition" onClick={closeNavPopup}>
                        <span className="material-icons-round">menu</span>
                    </button>
                    <nav>
                        {anchors.map((anchor, index) => {
                            return (
                                <a
                                    href={`/#${anchor.href}`}
                                    className="fade-in-slide-in"
                                    style={{animationDelay: `${animationStarts + (800 - index * 200)}ms`}}
                                    key={anchor.href}
                                >
                                    <p>{anchor.title}</p>
                                </a>
                            )
                        })}
                    </nav>
                </div>
            </header>
            {<div className="container nav-popup transition" ref={navPopup}>
                <nav>
                    {anchors.map((anchor, index) => {
                        return (
                            <div key={anchor.href}>
                                <a href={`/#${anchor.href}`}>
                                    <p>{anchor.title}</p>
                                </a>
                                {index === anchors.length - 1 ? <></> : <hr/>}
                            </div>
                        )
                    })}
                </nav>
            </div>}
        </div>
    );
}