import { useState } from "react";

const domestic = [
  {
    name: "Rajasthan",
    desc: "Royal palaces and heritage weddings.",
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500",
  },
  {
    name: "Goa",
    desc: "Beachside vibrant celebrations.",
    img: "https://images.unsplash.com/photo-1587922546307-776227941871?w=500",
  },
  {
    name: "Kerala",
    desc: "Backwaters & serene beauty.",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500",
  },
  {
    name: "Shimla",
    desc: "Mountain scenic weddings.",
    img: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=500",
  },
];

const international = [
  {
    name: "Dubai",
    desc: "Luxury weddings in iconic venues.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500",
  },
  {
    name: "Bali",
    desc: "Tropical paradise destination weddings.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
  },
  {
    name: "Thailand",
    desc: "Exotic beaches & vibrant culture.",
    img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=500",
  },
  {
    name: "Italy",
    desc: "Romantic European wedding experiences.",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500",
  },
];

function Card({ item }) {
  return (
    <div className="relative h-[360px] rounded-2xl overflow-hidden group cursor-pointer">

      {/* IMAGE */}
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

      {/* TEXT */}
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-xl text-[#d4af7a] mb-1">
          {item.name}
        </h3>
        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-300">
          {item.desc}
        </p>
      </div>

    </div>
  );
}

export default function DestinationsSection() {
  const [tab, setTab] = useState("domestic");

  return (
    <section
      id="destinations"
      className="bg-[#0a0a0a] text-white py-24 px-6"
    >
      {/* 🔥 HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-[#d4af7a] font-serif">
          Wedding Destinations
        </h2>
        <p className="text-gray-400 mt-4">
          Explore the most beautiful locations for your dream wedding.
        </p>
      </div>

      {/* 🔘 TABS */}
      <div className="flex justify-center gap-6 mb-12">
        <button
          onClick={() => setTab("domestic")}
          className={`px-6 py-2 border rounded-full transition ${
            tab === "domestic"
              ? "bg-[#d4af7a] text-black"
              : "border-[#d4af7a] text-[#d4af7a]"
          }`}
        >
          Domestic
        </button>

        <button
          onClick={() => setTab("international")}
          className={`px-6 py-2 border rounded-full transition ${
            tab === "international"
              ? "bg-[#d4af7a] text-black"
              : "border-[#d4af7a] text-[#d4af7a]"
          }`}
        >
          International
        </button>
      </div>

      {/* 🖼️ GRID */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {(tab === "domestic" ? domestic : international).map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>

    </section>
  );
}