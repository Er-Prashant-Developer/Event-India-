import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animation
      gsap.from([headingRef.current, subRef.current, btnRef.current], {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5,
      });

      // ✅ SAFE PARALLAX (NO WHITE LINE)
      gsap.to(".hero-bg", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // ✅ FIXED SCROLL BUTTON
  const scrollToContact = () => {
    const el = document.querySelector("#contact");

    if (el) {
      const navbarHeight =
        document.querySelector("nav")?.offsetHeight || 80;

      const elementPosition =
        el.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* 🔥 BACKGROUND FIXED */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="hero-bg absolute inset-[-15%] w-[130%] h-[130%] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop')",
          }}
        ></div>

        {/* overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
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

      {/* 🔥 CLEAN SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none opacity-80">
        <span className="text-[10px] tracking-widest text-white/60 mb-2">
          SCROLL
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-yellow-400/80 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}