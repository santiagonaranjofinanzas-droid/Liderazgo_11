document.addEventListener("DOMContentLoaded", () => {
    // Scroll animations using IntersectionObserver
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Accordion interaction for interactive ladder of participation
    const ladderHeaders = document.querySelectorAll(".ladder-header");
    ladderHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const step = header.parentElement;
            const isActive = step.classList.contains("active-step");
            
            // Toggle active class on clicked step
            if (isActive) {
                step.classList.remove("active-step");
            } else {
                // Remove active class from all other steps first
                document.querySelectorAll(".ladder-step").forEach(s => {
                    s.classList.remove("active-step");
                });
                step.classList.add("active-step");
            }
        });
    });
});
