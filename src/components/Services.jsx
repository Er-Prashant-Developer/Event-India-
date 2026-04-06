import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassWater, Music, Users, Camera, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <GlassWater size={32} className="text-gold" />,
    title: "Luxury Weddings",
    desc: "Bespoke luxury weddings with royal themes and premium experiences.",
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400",
      "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?w=400",
    ],
  },
  {
    icon: <Users size={32} className="text-gold" />,
    title: "Destination Weddings",
    desc: "Beautiful destination weddings across exotic locations.",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400",
    ],
  },
  {
    icon: <Users size={32} className="text-gold" />,
    title: "Corporate Events & Conferences",
    desc: "Professional corporate events and conferences.",
    images: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400",
    ],
  },
  {
    icon: <Camera size={32} className="text-gold" />,
    title: "Brand Events & Activations",
    desc: "Creative brand activations and promotions.",
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
    ],
  },
  {
    icon: <Music size={32} className="text-gold" />,
    title: "Theme-Based & Custom Events",
    desc: "Custom themed experiences designed uniquely.",
    images: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400",
    ],
  },
  {
    icon: <Music size={32} className="text-gold" />,
    title: "Private Celebrations",
    desc: "Exclusive private parties and gatherings.",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
    ],
  },
  {
    icon: <Music size={32} className="text-gold" />,
    title: "Artist & Entertainment",
    desc: "Live performers, DJs & celebrity entertainment.",
    images: [
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=400",
    ],
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
              {/* 🔥 CLICK TEXT */}
              <div className="absolute bottom-4 right-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300">
                Click →
              </div>

              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-400/10"></div>

              {/* icon */}
              <div className="mb-6 relative z-10">
                {srv.icon}
              </div>

              {/* title */}
              <h4 className="text-xl text-white group-hover:text-gold transition relative z-10">
                {srv.title}
              </h4>

              {/* desc */}
              <p className="text-gray-400 mt-2 text-sm relative z-10">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 POPUP */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          {/* background */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setActiveService(null)}
          ></div>

          {/* popup box */}
          <div className="relative w-[90%] md:w-[70%] max-h-[80vh] bg-[#111] rounded-2xl p-6 overflow-y-auto z-10">

            {/* close */}
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-white"
            >
              <X size={28} />
            </button>

            {/* title */}
            <h2 className="text-2xl text-yellow-400 mb-4">
              {activeService.title}
            </h2>

            {/* desc */}
            <p className="text-gray-300 mb-6">
              {activeService.desc}
            </p>

            {/* images */}
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