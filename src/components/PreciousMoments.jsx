import { useState, useEffect, useRef } from "react";

//sufi nights
import one from "../assets/Sufi nights/one.jpg";
import two from "../assets/Sufi nights/two.jpg";
import three from "../assets/Sufi nights/three.jpg";
import four from "../assets/Sufi nights/four.jpg";
import five from "../assets/Sufi nights/five.jpg";

// sangeet
import s1 from "../assets/Sangeet/one.jpg";
import s2 from "../assets/Sangeet/two.jpg";
import s3 from "../assets/Sangeet/three.jpg";
import s4 from "../assets/Sangeet/four.jpg";
import s5 from "../assets/Sangeet/five.jpg";

//Weddings
import w1 from "../assets/Weddings/one.jpg";
import w2 from "../assets/Weddings/two.jpg";
import w3 from "../assets/Weddings/three.jpg";
import w4 from "../assets/Weddings/four.jpg";
import w5 from "../assets/Weddings/five.jpg";

// Engagement
import e1 from "../assets/Engagement/one.jpg";
import e2 from "../assets/Engagement/two.jpg";
import e3 from "../assets/Engagement/three.jpg";
import e4 from "../assets/Engagement/four.jpg";
import e5 from "../assets/Engagement/five.jpg";

// Mehendi (⚠️ folder bana lena agar nahi hai)
import m1 from "../assets/Mehendi/one.jpg";
import m2 from "../assets/Mehendi/two.jpg";
import m3 from "../assets/Mehendi/three.jpg";
import m4 from "../assets/Mehendi/four.jpg";
import m5 from "../assets/Mehendi/five.jpg";

// Cocktail (⚠️ folder bana lena agar nahi hai)
import c1 from "../assets/Cocktail/one.jpg";
import c2 from "../assets/Cocktail/two.jpg";
import c3 from "../assets/Cocktail/three.jpg";
import c4 from "../assets/Cocktail/four.jpg";
import c5 from "../assets/Cocktail/five.jpg";

const data = {
  "Sufi Night": [one, two, three, four, five],
  Sangeet: [s1, s2, s3, s4, s5],
  Wedding: [w1, w2, w3, w4, w5],
  Engagement: [e1, e2, e3, e4, e5],
  Mehendi: [m1, m2, m3, m4, m5],
  Cocktail: [c1, c2, c3, c4, c5],
};

export default function Premium3DSlider() {
  const categories = Object.keys(data);

  const [activeIndex, setActiveIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  const navRef = useRef(null);

  // 🔥 PERFECT FLOW (5 images → then category change)
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => {
        const total = data[categories[activeIndex]].length;

        if (prev === total - 1) {
          setActiveIndex((prevCat) => (prevCat + 1) % categories.length);
          return 0;
        }

        return prev + 1;
      });
    }, 2600);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // 🔥 hover
  const handleChange = (i) => {
    setActiveIndex(i);
    setImgIndex(0);
  };

  // 🔥 nav center (no page jump)
  useEffect(() => {
    const el = document.getElementById(`nav-${activeIndex}`);
    if (el && navRef.current) {
      const container = navRef.current;

      const offset =
        el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2;

      container.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section className="bg-black text-white py-20 px-4 md:px-12">
      <h2 className="text-center text-4xl md:text-5xl text-yellow-400 mb-12">
        Precious Moments
      </h2>

      {/* NAV */}
      <div
        ref={navRef}
        className="flex overflow-x-auto no-scrollbar mb-10 px-2"
      >
        <div className="flex space-x-6 mx-auto min-w-max">
          {categories.map((item, i) => (
            <button
              key={item}
              id={`nav-${i}`}
              onMouseEnter={() => handleChange(i)}
              onClick={() => handleChange(i)}
              className={`text-lg transition-all duration-500 ${
                i === activeIndex
                  ? "text-yellow-400 scale-125 font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* 🔥 3D STACK */}
      <div className="relative h-[350px] md:h-[500px] flex items-center justify-center perspective">
        {categories.map((cat, i) => {
          let offset = i - activeIndex;

          // 🔥 circular smooth fix (NO JUMP)
          if (offset > categories.length / 2) offset -= categories.length;
          if (offset < -categories.length / 2) offset += categories.length;

          return (
            <div
              key={cat}
              className="absolute w-[90%] md:w-[70%] h-full transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `
                  translateX(${offset * 90}px)
                  scale(${1 - Math.abs(offset) * 0.08})
                  rotateY(${offset * 8}deg)
                `,
                zIndex: 50 - Math.abs(offset),
                opacity: Math.abs(offset) > 4 ? 0 : 1,
              }}
            >
              <img
                src={i === activeIndex ? data[cat][imgIndex] : data[cat][0]}
                className="w-full h-full object-cover rounded-3xl shadow-2xl transition-all duration-700"
              />

              <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

              {i === activeIndex && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl md:text-6xl animate-fadeLuxury">
                    {cat}
                  </h2>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
