function hideDetails() {
    // TODO: Actually hide details
}

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList' || mutation.type === "attributes") {
            hideDetails();
        };
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
});

hideDetails();