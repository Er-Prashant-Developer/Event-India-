import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ✅ ENTRY ANIMATION (stable)
      gsap.fromTo(
        [subRef.current, headingRef.current, btnRef.current],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );

      // 🔥 FINAL PARALLAX FIX (NO FLICKER)
      gsap.to(bgRef.current, {
        y: 80, // ✅ pixel-based (no subpixel bug)
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // ✅ PERFECT SCROLL FIX
  const scrollToContact = () => {
    const el = document.querySelector("#contact");

    if (el) {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.clientHeight : 80;

      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-[80px]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <div
          ref={bgRef}
          className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop')",
            transform: "translate3d(0,0,0)", // 🔥 GPU FIX
          }}
        ></div>

        {/* overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* SAFETY LAYER */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0a0a0a]"></div>
      </div>

      {/* CONTENT */}
      <div className="container relative z-10 px-6 mx-auto text-center mt-20">
        <span
          ref={subRef}
          className="block text-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium"
        >
          Exquisite Experiences
        </span>

        <h1
          ref={headingRef}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight drop-shadow-2xl"
        >
          Crafting{" "}
          <span className="text-gold italic">Timeless</span>
          <br /> Memories
        </h1>

        {/* BUTTON */}
        <div ref={btnRef} className="mt-16">
          <button
            onClick={scrollToContact}
            className="inline-block px-10 py-4 bg-gold text-dark font-semibold tracking-wider uppercase hover:bg-white transition-colors duration-300"
          >
            Plan Your Event
          </button>
        </div>
      </div>

      {/* INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-70">
        <div className="w-[2px] h-10 bg-gradient-to-b from-[#d4af7a] to-transparent rounded-full animate-pulse"></div>
      </div>
    </section>
  );
}