document.addEventListener("DOMContentLoaded", () => {
    // Create a GSAP timeline
    const tl = gsap.timeline();

    // 1. The black overlay slides up like a curtain
    tl.to(".intro-overlay", { 
        duration: 1.5, 
        height: 0, 
        ease: "power4.inOut" 
    })
    // 2. The navbar (with the Astronis logo) fades and slides down
    .to(".navbar", { 
        duration: 1, 
        opacity: 1, 
        y: 0, 
        ease: "power3.out" 
    }, "-=0.5") // Starts 0.5s before the previous animation ends
    // 3. The hero text rises up smoothly
    .from(".hero-title", { 
        duration: 1.2, 
        y: 80, 
        opacity: 0, 
        ease: "power4.out" 
    }, "-=0.8")
    // 4. The subtitle follows
    .from(".hero-subtitle", { 
        duration: 1, 
        y: 40, 
        opacity: 0, 
        ease: "power3.out" 
    }, "-=0.6");
});
