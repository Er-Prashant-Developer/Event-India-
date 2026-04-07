import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassWater, Music, Users, Camera, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ✅ LOCAL IMAGE IMPORTS

// Wedding
import w1 from "../assets/Weddings/one.jpg";
import w2 from "../assets/Weddings/two.jpg";

// Destination / Sufi
import sufi1 from "../assets/Sufi nights/one.jpg";
import sufi2 from "../assets/Sufi nights/two.jpg";

// Engagement
import e1 from "../assets/Engagement/one.jpg";

// Mehendi
import m1 from "../assets/Mehendi/one.jpg";

// Sangeet
import s1 from "../assets/Sangeet/one.jpg";

// Cocktail
import c1 from "../assets/Cocktail/one.jpg";

// Timeless
import t1 from "../assets/Timeless/one.jpg";

// ✅ SERVICES (IMAGES UPDATED ONLY)
const services = [
  {
    icon: <GlassWater size={32} className="text-gold" />,
    title: "Luxury Weddings",
    desc: "Bespoke luxury weddings with royal themes and premium experiences.",
    images: [w1, w2],
  },
  {
    icon: <Users size={32} className="text-gold" />,
    title: "Destination Weddings",
    desc: "Beautiful destination weddings across exotic locations.",
    images: [sufi1, sufi2],
  },
  {
    icon: <Users size={32} className="text-gold" />,
    title: "Corporate Events & Conferences",
    desc: "Professional corporate events and conferences.",
    images: [e1],
  },
  {
    icon: <Camera size={32} className="text-gold" />,
    title: "Brand Events & Activations",
    desc: "Creative brand activations and promotions.",
    images: [m1],
  },
  {
    icon: <Music size={32} className="text-gold" />,
    title: "Theme-Based & Custom Events",
    desc: "Custom themed experiences designed uniquely.",
    images: [s1],
  },
  {
    icon: <Music size={32} className="text-gold" />,
    title: "Private Celebrations",
    desc: "Exclusive private parties and gatherings.",
    images: [c1],
  },
  {
    icon: <Music size={32} className="text-gold" />,
    title: "Artist & Entertainment",
    desc: "Live performers, DJs & celebrity entertainment.",
    images: [t1],
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="services" className="py-24 bg-dark">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Our Expertise
          </h2>
          <h3 className="font-heading text-4xl text-white">
            Bespoke Services
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              onClick={() => setActiveService(srv)}
              className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl cursor-pointer group overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(212,175,55,0.2)]"
            >
              <div className="absolute bottom-4 right-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300">
                Click →
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-400/10"></div>

              <div className="mb-6 relative z-10">
                {srv.icon}
              </div>

              <h4 className="text-xl text-white group-hover:text-gold transition relative z-10">
                {srv.title}
              </h4>

              <p className="text-gray-400 mt-2 text-sm relative z-10">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setActiveService(null)}
          ></div>

          <div className="relative w-[90%] md:w-[70%] max-h-[80vh] bg-[#111] rounded-2xl p-6 overflow-y-auto z-10">

            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-white"
            >
              <X size={28} />
            </button>

            <h2 className="text-2xl text-yellow-400 mb-4">
              {activeService.title}
            </h2>

            <p className="text-gray-300 mb-6">
              {activeService.desc}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activeService.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded-xl object-cover w-full h-40 hover:scale-105 transition"
                />
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}