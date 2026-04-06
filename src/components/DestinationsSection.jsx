import { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* ================= DOMESTIC ================= */
const domestic = [
  {
    name: "Udaipur",
    desc: "Famous for royal palace weddings and stunning lake views.",
    images: ["https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500"],
  },
  {
    name: "Jaipur",
    desc: "Perfect for grand royal weddings with historic forts and palaces.",
    images: ["https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500"],
  },
  {
    name: "Jodhpur",
    desc: "Known for majestic palaces and luxurious destination weddings.",
    images: ["https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=500"],
  },
  {
    name: "Goa",
    desc: "Ideal for beautiful beach weddings and vibrant celebrations.",
    images: ["https://images.unsplash.com/photo-1587922546307-776227941871?w=500"],
  },
  {
    name: "Agra",
    desc: "Romantic wedding destination near the iconic Taj Mahal.",
    images: ["https://images.unsplash.com/photo-1548013146-72479768bada?w=500"],
  },
  {
    name: "Kerala",
    desc: "Perfect for scenic weddings with backwaters and lush greenery.",
    images: ["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500"],
  },
  {
    name: "Shimla",
    desc: "A charming hill station for romantic mountain weddings.",
    images: ["https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=500"],
  },
  {
    name: "Rishikesh",
    desc: "Peaceful riverside weddings on the banks of the Ganges.",
    images: ["https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=500"],
  },
  {
    name: "Havelock Island",
    desc: "Crystal-clear beaches for an exotic island wedding.",
    images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500"],
  },
  {
    name: "Pushkar",
    desc: "A unique destination with heritage havelis and desert charm.",
    images: ["https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500"],
  },
];

/* ================= INTERNATIONAL ================= */
const international = [
  {
    name: "Thailand",
    desc: "Exotic beaches, vibrant culture, and luxurious wedding venues.",
    images: ["https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=500"],
  },
  {
    name: "Hong Kong",
    desc: "Modern skyline weddings with luxury and tradition.",
    images: ["https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=500"],
  },
  {
    name: "Malaysia",
    desc: "Iconic city weddings with grand skyline views.",
    images: ["https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=500"],
  },
  {
    name: "Macau",
    desc: "Luxury casino resorts and glamorous wedding venues.",
    images: ["https://images.unsplash.com/photo-1544986581-efac024faf62?w=500"],
  },
  {
    name: "Bali",
    desc: "Tropical paradise weddings with scenic beauty.",
    images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500"],
  },
  {
    name: "UAE",
    desc: "Ultra-luxury weddings in Dubai & Abu Dhabi.",
    images: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500"],
  },
  {
    name: "Oman",
    desc: "Royal desert and beachfront weddings with elegance.",
    images: ["https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=500"],
  },
];

/* ================= CARD ================= */
function Card({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-[260px] h-[320px] rounded-2xl overflow-hidden relative group cursor-pointer flex-shrink-0"
    >
      <img
        src={item.images[0]}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

      <div className="absolute top-3 right-3 text-xs text-gray-300 opacity-0 group-hover:opacity-100">
        Click →
      </div>

      <div className="absolute bottom-5 left-5 right-5">
        <h3 className="text-lg text-[#d4af7a]">{item.name}</h3>
        <p className="text-gray-300 text-xs opacity-0 group-hover:opacity-100">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

/* ================= MAIN ================= */
export default function DestinationsSection() {
  const [tab, setTab] = useState("domestic");
  const [active, setActive] = useState(null);
  const scrollRef = useRef(null);

  const data = tab === "domestic" ? domestic : international;

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section id="destinations" className="bg-[#0a0a0a] text-white py-24 px-6">

      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-4xl text-[#d4af7a] font-serif">
          Wedding Destinations
        </h2>
      </div>

      {/* TABS */}
      <div className="flex justify-center gap-6 mb-10">
        {["domestic", "international"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-2 border rounded-full transition ${
              tab === t
                ? "bg-[#d4af7a] text-black"
                : "border-[#d4af7a] text-[#d4af7a]"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* SLIDER */}
      <div className="relative">

        {/* LEFT */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-3 rounded-full hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        {/* RIGHT */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-3 rounded-full hover:scale-110 transition"
        >
          <ChevronRight />
        </button>

        <div ref={scrollRef} className="overflow-x-auto no-scrollbar">
          <div className="flex gap-5 w-max px-10">
            {data.map((item, i) => (
              <Card key={i} item={item} onClick={() => setActive(item)} />
            ))}
          </div>
        </div>

        {/* GRADIENT */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>
      </div>

      {/* POPUP */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setActive(null)}
          ></div>

          <div className="relative w-[90%] md:w-[60%] bg-[#111] rounded-2xl p-6 z-10">

            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 text-white"
            >
              <X />
            </button>

            <h2 className="text-2xl text-[#d4af7a] mb-4">
              {active.name}
            </h2>

            <p className="text-gray-300 mb-6">
              {active.desc}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {active.images.map((img, i) => (
                <img key={i} src={img} className="rounded-lg h-40 object-cover w-full" />
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}