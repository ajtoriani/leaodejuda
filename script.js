/* SCRIPT FINAL - LEÃO DE JUDÁ
   Garante carregamento correto das animações e funcionalidades.
*/

window.addEventListener("load", () => {
    
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh(); // Corrige posição após carregamento da imagem

    // 1. HERO ANIMATION
    const tl = gsap.timeline();
    tl.to("#hero-car", { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" })
      .from(".eyebrow", { y: 20, opacity: 0, duration: 0.5 }, "-=1.2")
      .from(".headline", { y: 50, opacity: 0, duration: 0.8 }, "-=1.0")
      .from(".subheadline", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".cta-group", { y: 20, opacity: 0, duration: 0.5 }, "-=0.4");

    // 2. PARALLAX NO CARRO
    document.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth - e.pageX) / 80;
        const y = (window.innerHeight - e.pageY) / 80;
        gsap.to("#hero-car", { x: x, y: y, duration: 1, ease: "power1.out" });
    });

    // 3. ANIMAÇÃO DE CARDS (Genérica)
    const animateCards = (selector, triggerSelector) => {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            gsap.set(elements, { y: 50, opacity: 0 }); // Estado inicial
            gsap.to(elements, {
                scrollTrigger: {
                    trigger: triggerSelector,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                y: 0, opacity: 1, duration: 0.8, stagger: 0.15, clearProps: "transform"
            });
        }
    };

    animateCards(".service-card", ".services-grid");
    // Se quiser animar o grid de stats também:
    animateCards(".stat-box", ".stats-wrapper");

    // 4. MENU MOBILE
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener("click", () => {
            mobileMenu.style.display = (mobileMenu.style.display === "flex") ? "none" : "flex";
        });
        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => { mobileMenu.style.display = "none"; });
        });
    }
});