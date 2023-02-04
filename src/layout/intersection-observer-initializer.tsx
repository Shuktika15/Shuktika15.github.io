import {useEffect} from "react";

export default function IntersectionObserverInitializer() {
    const intersectionOptions: IntersectionObserverInit = {
        threshold: 0.5
    };

    function executor(elements: NodeListOf<HTMLElement>, callback: (element: HTMLElement, index: number) => void) {
        for (let i = 0; i < elements.length; ++i) {
            const element = elements[i];
            callback(element, i);
        }
    }

    useEffect(() => {
        const skills = document.querySelectorAll<HTMLElement>(".skill");
        const projects = document.querySelectorAll<HTMLElement>(".project");
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                entry.target.classList.toggle("no-top", entry.isIntersecting);

                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                }
            }
        }, intersectionOptions);

        executor(skills, (element: HTMLElement, index: number) => {
            element.style.transitionDelay = `${index * 250}ms`;
            observer.observe(element);
        });
        executor(projects, (element: HTMLElement) => {
            observer.observe(element);
        });
    }, []);
    return (<></>);
}