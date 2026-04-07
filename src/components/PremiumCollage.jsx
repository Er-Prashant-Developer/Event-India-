import { useRef, useState, useEffect } from "react";

import t1 from "../assets/Timeless/one.jpg";
import t2 from "../assets/Timeless/two.jpg";
import t3 from "../assets/Timeless/three.jpg";
import t4 from "../assets/Timeless/four.jpg";
import t5 from "../assets/Timeless/five.jpg";
import t6 from "../assets/Timeless/six.jpg";
import t7 from "../assets/Timeless/seven.jpg";
import t8 from "../assets/Timeless/eight.jpg";

const images = [t1, t2, t3, t4, t5, t6, t7, t8];

export default function LuxuryCylinderHero() {
  const cylinderRef = useRef(null);

  const [baseRotation, setBaseRotation] = useState(0);
  const mouseRotation = useRef(0);

  const radius = 360;
  const angleStep = 360 / images.length;

  // ✅ FIXED smooth animation (click + mouse both work properly)
  useEffect(() => {
    let current = baseRotation;
    let rafId;

    const animate = () => {
      const target = baseRotation + mouseRotation.current;

      // 🔥 smoother + responsive
      current += (target - current) * 0.12;

      if (cylinderRef.current) {
        cylinderRef.current.style.transform = `rotateY(${current}deg)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(rafId);
  }, [baseRotation]);

  // ✅ mouse move
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
          onClick={() => setBaseRotation((r) => r - angleStep)}
          className="absolute left-2 bg-[#8B6B4A]/90 text-white px-3 py-2 rounded-full shadow hover:scale-110 transition"
        >
          ◀
        </button>

        <button
          onClick={() => setBaseRotation((r) => r + angleStep)}
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
        }

        .card {
          position: absolute;
          width: 240px;
          height: 320px;
          left: 140px;
          top: 100px;
          border-radius: 20px;
          overflow: hidden;

          backface-visibility: hidden;
          transform-style: preserve-3d;

          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: scale(1.08);
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </section>
  );
}