import { useRef, useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400",
  "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?w=400",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
  "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?w=400",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400",
];

export default function LuxuryCylinderHero() {
  const cylinderRef = useRef(null);

  const [baseRotation, setBaseRotation] = useState(0);
  const mouseRotation = useRef(0);

  const radius = 360;
  const angleStep = 360 / images.length;

  // ✅ FIXED animation loop (only once)
  useEffect(() => {
    let current = 0;
    let rafId;

    const animate = () => {
      const target = baseRotation + mouseRotation.current;

      current += (target - current) * 0.08;

      if (cylinderRef.current) {
        cylinderRef.current.style.transform = `rotateY(${current}deg)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(rafId);
  }, [baseRotation]);

  const handleMouseMove = (e) => {
    const percent = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseRotation.current = percent * 120;
  };

  return (
    <section
      className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center text-center px-6 py-8 my-5"
      onMouseMove={handleMouseMove}
    >
      {/* TEXT */}
      <div className="max-w-3xl mb-20">
        <h1 className="text-5xl md:text-6xl font-serif text-[#8B6B4A] mb-6 leading-tight">
          Timeless Wedding Moments <br /> Captured Beautifully
        </h1>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Every love story deserves to be celebrated with elegance and charm.
        </p>

        <button className="bg-[#8B6B4A] text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
          Explore Wedding Gallery
        </button>
      </div>

      {/* CYLINDER */}
      <div className="relative h-[520px] flex items-center justify-center">
        <div className="scene">
          <div className="cylinder" ref={cylinderRef}>
            {images.map((img, i) => (
              <div
                key={i}
                className="card"
                style={{
                  transform: `rotateY(${i * angleStep}deg) translateZ(${radius}px)`,
                }}
              >
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* ARROWS */}
        <button
          onClick={() => setBaseRotation((r) => r - 30)}
          className="absolute left-2 bg-[#8B6B4A]/90 text-white px-3 py-2 rounded-full shadow hover:scale-110 transition"
        >
          ◀
        </button>

        <button
          onClick={() => setBaseRotation((r) => r + 30)}
          className="absolute right-2 bg-[#8B6B4A]/90 text-white px-3 py-2 rounded-full shadow hover:scale-110 transition"
        >
          ▶
        </button>
      </div>

      {/* STYLE */}
      <style>{`
        .scene {
          width: 520px;
          height: 520px;
          perspective: 1600px;
        }

        .cylinder {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          will-change: transform;
          transform: translateZ(0);
        }

        /* ❗ FIXED: double dot removed */
        .card {
          position: absolute;
          width: 240px;
          height: 320px;
          left: 140px;
          top: 100px;
          border-radius: 20px;
          overflow: hidden;

          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;

          transform-style: preserve-3d;
          transform: translateZ(0);
          will-change: transform;

          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        /* ❗ FIXED hover */
        .card:hover {
          scale: 1.08;
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;

          backface-visibility: hidden;
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
}