import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassWater, Music, Users, Camera } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Users size={32} className="text-gold" />,
    title: "Corporate Events",
    desc: "Seamless execution of conferences, product launches, and gala dinners.",
    images: [
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?w=400",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400",
    ],
  },
  {
    icon: <GlassWater size={32} className="text-gold" />,
    title: "Luxury Weddings",
    desc: "Bespoke bridal experiences and royal ceremonies.",
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400",
      "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?w=400",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
    ],
  },
  {
    icon: <Music size={32} className="text-gold" />,
    title: "Private Parties",
    desc: "Exclusive VIP gatherings and celebrations.",
    images: [
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400",
    ],
  },
  {
    icon: <Camera size={32} className="text-gold" />,
    title: "Media & PR Events",
    desc: "Celebrity management and press events.",
    images: [
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=400",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
    ],
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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
    <>
      {/* 🔥 ONLY CHANGE HERE */}
      <section id="services" ref={containerRef} className="py-32 bg-dark">
        <div className="container mx-auto px-6 md:px-12">

          <div className="text-center mb-20">
            <h2 className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl text-white">
              Bespoke Services
            </h3>
          </div>

          {(cardsRef.current = [])}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((srv, idx) => (
              <div
                key={idx}
                ref={(el) => (cardsRef.current[idx] = el)}
                onClick={() => setActiveCard(srv)}
                className="relative p-8 rounded-2xl border border-white/10 
                bg-white/5 backdrop-blur-xl 
                group cursor-pointer overflow-hidden
                transition-all duration-500 
                hover:-translate-y-4 hover:scale-[1.04]
                hover:shadow-[0_30px_80px_rgba(255,215,0,0.3)]"
              >
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
                  Click →
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-yellow-400/10"></div>

                <div className="mb-6 p-4 rounded-xl bg-white/10 inline-flex">
                  {srv.icon}
                </div>

                <h4 className="text-xl text-white group-hover:text-yellow-400 transition">
                  {srv.title}
                </h4>

                <p className="text-gray-300 text-sm mt-2">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setActiveCard(null)}
          ></div>

          <div className="relative w-[90%] md:w-[70%] h-[80%] bg-[#111] rounded-2xl p-8 overflow-y-auto animate-popup z-10">

            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-3xl text-yellow-400 mb-4">
              {activeCard.title}
            </h2>

            <p className="text-gray-300 mb-6">
              {activeCard.desc}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activeCard.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded-xl hover:scale-105 transition"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}