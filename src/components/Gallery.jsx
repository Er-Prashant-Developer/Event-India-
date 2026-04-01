import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://www.v3events.in/wp-content/uploads/2026/03/sufi6.webp",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1080&auto=format&fit=crop",
  "https://www.v3events.in/wp-content/uploads/2026/03/rajasthan.webp",
  "https://www.v3events.in/wp-content/uploads/2026/03/geo.webp",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1080&auto=format&fit=crop",
  "https://www.v3events.in/wp-content/uploads/2026/03/sufi4.webp",
];

export default function Gallery() {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const images = containerRef.current.querySelectorAll(".gallery-img");

    gsap.from(images, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section id="gallery" className="py-24 bg-dark relative" ref={triggerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Portfolio
            </h2>
            <h3 className="font-heading text-4xl md:text-5xl text-white">
              Event Gallery
            </h3>
          </div>
          <a
            href="#"
            className="hidden md:inline-block border-b border-gold text-gold pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm mb-2"
          >
            View All Work
          </a>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden group cursor-pointer ${
                idx === 0 || idx === 3
                  ? "md:col-span-2 md:aspect-[2/1]"
                  : "aspect-square"
              }`}
            >
              {/* Image */}
              <img
                src={img}
                alt="gallery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-heading text-2xl tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Discover
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a
            href="#"
            className="inline-block border border-gold text-gold py-3 px-8 hover:bg-gold hover:text-dark transition-colors uppercase tracking-widest text-sm"
          >
            View All Work
          </a>
        </div>
      </div>
    </section>
  );
}
