import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete,
    });

    // 🔥 Initial state
    gsap.set(containerRef.current, { y: 0 });
    gsap.set([textRef.current, logoRef.current], {
      y: 30,
      opacity: 0,
    });
    gsap.set(lineRef.current, { scaleX: 0 });

    // 🔥 STEP 1: TEXT + LOGO TOGETHER ENTRY
    tl.to([textRef.current, logoRef.current], {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    })

      // 🔥 STEP 2: LINE LOAD
      .to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
        },
        "-=0.5"
      )

      // 🔥 HOLD (feel of loading)
      .to({}, { duration: 0.5 })

      // 🔥 STEP 3: LOGO ZOOM (MAIN EFFECT)
      .to(
        logoRef.current,
        {
          scale: 4,
          opacity: 0,
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.2"
      )

      // TEXT fade with logo
      .to(
        textRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.8"
      )

      // 🔥 STEP 4: SCREEN EXIT
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut",
      });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark text-white overflow-hidden"
    >
      {/* LOGO */}
      <img
        ref={logoRef}
        src="/favicon.png" // 👉 apna logo yaha change kar sakta hai
        alt="logo"
        className="w-20 md:w-28 mb-6"
      />

      {/* TEXT */}
      <h1
        ref={textRef}
        className="font-heading text-4xl md:text-6xl text-gold tracking-widest text-glow"
      >
        EVENT INDIAS
      </h1>

      {/* LINE */}
      <div className="w-48 h-[1px] bg-white/20 mt-8 relative">
        <div
          ref={lineRef}
          className="absolute inset-0 bg-gold origin-left"
        ></div>
      </div>
    </div>
  );
}