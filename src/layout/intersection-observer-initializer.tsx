import {useEffect} from "react";

export default function IntersectionObserverInitializer() {
    const intersectionOptions: IntersectionObserverInit = {
        threshold: 0.1
    };

    useEffect(() => {
        const skills = document.querySelectorAll(".skill");
        const projects = document.querySelectorAll(".project");
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                entry.target.classList.toggle("no-top", entry.isIntersecting);

                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                }
            }
        }, intersectionOptions);

        function executor(elements: NodeListOf<Element>) {
            for (let i = 0; i < elements.length; ++i) {
                const element = elements[i];
                element.style.transitionDelay = `${i * 250}ms`;
                observer.observe(element);
            }
        }

        executor(skills);
        executor(projects);
    }, []);
    return (<></>);
}