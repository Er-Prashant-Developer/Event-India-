import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: 500, label: "Events Planned", suffix: "+" },
  { value: 15, label: "Years Experience", suffix: "+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 50, label: "Awards Won", suffix: "" },
];

export default function Stats() {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 🔥 Cards animation
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // 🔥 Counter animation
      countersRef.current.forEach((counter) => {
        const target = parseFloat(counter.dataset.target);

        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 relative bg-dark">

      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
          Our Achievements
        </h2>
        <h3 className="font-heading text-4xl md:text-5xl text-white">
          Numbers That Define Excellence
        </h3>
      </div>

      {/* GRID */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {statsData.map((stat, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="font-heading text-5xl md:text-6xl text-gold mb-2 flex justify-center">
                <span
                  ref={(el) => (countersRef.current[idx] = el)}
                  data-target={stat.value}
                >
                  0
                </span>
                <span>{stat.suffix}</span>
              </div>

              <span className="text-xs uppercase tracking-widest text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}