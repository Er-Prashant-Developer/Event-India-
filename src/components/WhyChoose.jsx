import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const data = [
  {
    id: "01",
    title: "Luxury Expertise",
    desc: "V3 Events specializes in designing luxurious weddings with premium venues, elegant décor, and seamless execution. Our experienced team ensures every detail reflects sophistication, creating memorable celebrations that truly stand out.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80",
  },
  {
    id: "02",
    title: "Personalized Planning",
    desc: "Every wedding is unique. V3 Events creates customized themes, décor styles, and experiences tailored to the couple’s story, culture, and vision, ensuring a celebration that feels truly personal and meaningful.",
    img: "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?w=900&q=80",
  },
  {
    id: "03",
    title: "Global Destinations",
    desc: "From India to international locations like Dubai, Thailand, and Bali, V3 Events plans stunning destination weddings with trusted vendor networks, smooth coordination, and exceptional hospitality for unforgettable celebrations.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
  },
  {
    id: "04",
    title: "Complete Management",
    desc: "We manage everything from planning to execution — logistics, décor, entertainment, guest hospitality, and coordination. Our end-to-end approach ensures couples enjoy a stress-free wedding experience.",
    img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?w=900&q=80",
  },
];

export default function WhyChoosePremium() {
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-16">

      {/* ✅ BACKGROUND VIDEO (WORKING) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 🔊 SOUND BUTTON */}
      <button
        onClick={toggleSound}
        className="absolute top-6 right-6 z-20 bg-white/10 p-3 rounded-full"
      >
        {muted ? <VolumeX /> : <Volume2 />}
      </button>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl text-center mb-16">
          Why Choose <span className="text-yellow-400">V3 Events</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-6">
            {data.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                className={`p-5 rounded-xl cursor-pointer transition ${
                  active === i
                    ? "bg-white/20 border border-yellow-400"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <h3 className="text-xl font-semibold">
                  <span className="text-yellow-400 mr-2">
                    {item.id}
                  </span>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-white/10">

            <img
              src={data[active].img}
              className="w-full h-full object-cover"
              alt="event"
            />

            <div className="absolute inset-0 bg-black/60 flex items-end p-8">
              <div>
                <h3 className="text-2xl text-yellow-400 mb-2">
                  {data[active].title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {data[active].desc}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}