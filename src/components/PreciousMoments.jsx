import { useState, useEffect, useRef } from "react";

const data = {
  "Sufi Night": [
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80",
    "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=900&q=80",
    "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=900&q=80",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&q=80",
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=900&q=80",
  ],
  "Sangeet": [
    "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?w=900&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80",
    "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=900&q=80",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=80",
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=900&q=80",
  ],
  "Wedding": [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=900&q=80",
    "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=900&q=80",
    "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=900&q=80",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&q=80",
  ],
  "Engagement": [
    "https://images.unsplash.com/photo-1529636798458-92182e662485?w=900&q=80",
    "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=900&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80",
    "https://images.unsplash.com/photo-1505236738411-0f1f0c5f6c53?w=900&q=80",
    "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?w=900&q=80",
  ],
  "Mehendi": [
    "https://images.unsplash.com/photo-1594736797933-d0d9c8c3f6b7?w=900&q=80",
    "https://images.unsplash.com/photo-1603570419889-8f1a0d8e1c2f?w=900&q=80",
    "https://images.unsplash.com/photo-1598524374912-6b0b1c6d1a3f?w=900&q=80",
    "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=900&q=80",
    "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=900&q=80",
  ],
  "Cocktail": [
    "https://images.unsplash.com/photo-1514361892635-cebb0c49a1b2?w=900&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80",
    "https://images.unsplash.com/photo-1551024709-8f23befc6c7c?w=900&q=80",
    "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=900&q=80",
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900&q=80",
  ],
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
        el.offsetLeft -
        container.offsetWidth / 2 +
        el.offsetWidth / 2;

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
      <div ref={navRef} className="flex overflow-x-auto no-scrollbar mb-10 px-2">
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
                src={
                  i === activeIndex
                    ? data[cat][imgIndex]
                    : data[cat][0]
                }
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