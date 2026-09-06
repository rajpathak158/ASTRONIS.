document.addEventListener("DOMContentLoaded", () => {
    // 1. Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 2. Initial Page Load Cinematic Timeline
    const tl = gsap.timeline();

    tl.to(".intro-overlay", { 
        duration: 1.5, 
        height: 0, 
        ease: "power4.inOut" 
    })
    .to(".navbar", { 
        duration: 1, 
        opacity: 1, 
        y: 0, 
        ease: "power3.out" 
    }, "-=0.5")
    .from(".hero-title", { 
        duration: 1.2, 
        y: 80, 
        opacity: 0, 
        ease: "power4.out" 
    }, "-=0.8")
    .from(".hero-subtitle", { 
        duration: 1, 
        y: 40, 
        opacity: 0, 
        ease: "power3.out" 
    }, "-=0.6");

    // 3. Scroll Animations

    // Stats counter boxes rise up
    gsap.from(".stat-box", {
        scrollTrigger: {
            trigger: ".stats-section",
            start: "top 80%", 
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Services Cards 3D flip-up
    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: ".services-section",
            start: "top 75%",
        },
        y: 80,
        opacity: 0,
        rotationX: -10, 
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out"
    });

    // Process Steps slide in
    gsap.from(".step", {
        scrollTrigger: {
            trigger: ".process-section",
            start: "top 85%",
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.5)"
    });
});
