import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Priya Sharma",
    event: "Luxury Wedding",
    text: "The conceptualization and execution of our wedding was simply flawless. Event Indias turned our dream into a reality with such elegance.",
  },
  {
    name: "Rohan Kapoor",
    event: "Corporate Gala",
    text: "Our annual corporate event has never looked so premium. The attention to detail, lighting, and guest management was top-tier.",
  },
  {
    name: "Aisha & Arjun",
    event: "Anniversary Celebration",
    text: "From start to finish, the entire team was professional and creative. They brought a unique charm to our celebration that we will never forget.",
  }
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const texts = gsap.utils.toArray(".review-text");

      // 🔥 RIGHT SIDE TEXT ANIMATION (DELAYED START)
      gsap.from(texts, {
        x: 120,
        opacity: 0,
        duration: 1.4,
        stagger: 0.25,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%", // 🔥 thoda scroll hone ke baad start
          toggleActions: "play none none none",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-32 bg-black relative overflow-hidden"
    >
      {/* BIG BACKGROUND QUOTE */}
      <Quote
        size={400}
        className="absolute -top-20 -left-20 text-white/[0.03]"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-yellow-400 text-sm tracking-[0.2em] uppercase mb-4">
            Client Love
          </h2>
          <h3 className="text-4xl md:text-5xl text-white font-serif">
            Words of Praise
          </h3>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-white 
              transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(255,215,0,0.15)]"
            >
              <Quote size={30} className="text-yellow-400 mb-4" />

              {/* 🔥 TEXT ANIMATION TARGET */}
              <p className="review-text text-sm md:text-base italic mb-6 text-gray-200 leading-relaxed">
                "{review.text}"
              </p>

              <div>
                <div className="w-10 h-[2px] bg-yellow-400 mb-3"></div>

                <h4 className="text-sm uppercase tracking-widest">
                  {review.name}
                </h4>

                <span className="text-xs text-gray-400">
                  {review.event}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}