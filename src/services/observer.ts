export default function userObserver<T extends HTMLElement>(
    elements: T[],
    observationCallback: (entry: IntersectionObserverEntry, observer: IntersectionObserver, index: number) => void,
    options?: IntersectionObserverInit,
    preObserveCallback?: (element: T, index: number) => void
) {
    const observer = new IntersectionObserver((entries) => {
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            observationCallback(entry, observer, i);
        }
    });

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (preObserveCallback) {
            preObserveCallback(element, i);
        }

        observer.observe(element);
    }
}