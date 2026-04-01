import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const links = ["#home", "#services", "#gallery", "#testimonials", "#destinations"];

  // ✅ TEXT FORMAT FUNCTION (First Letter Capital)
  const formatText = (text) => {
    const clean = text.replace("#", "");
    return clean.charAt(0).toUpperCase() + clean.slice(1);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      links.forEach((id) => {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);

    if (el) {
      const yOffset = -80;
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* LOGO */}
        <div
          onClick={() => scrollToSection("#home")}
          className="cursor-pointer"
        >
          <img src="/favicon.png" className="h-10" />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest">

          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(link)}
              className={`relative group transition-all duration-300 ${
                active === link ? "text-[#d4af7a]" : "text-white"
              }`}
            >
              {formatText(link)}

              {/* underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#d4af7a] transition-all duration-300 ${
                  active === link
                    ? "w-full shadow-[0_0_10px_rgba(212,175,122,0.7)]"
                    : "w-0 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(212,175,122,0.5)]"
                }`}
              ></span>
            </button>
          ))}

          {/* BUTTON */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-6 py-2 border border-[#d4af7a] text-[#d4af7a] hover:bg-[#d4af7a] hover:text-black transition-all duration-300 rounded-sm hover:shadow-[0_0_15px_rgba(212,175,122,0.5)]"
          >
            Consult Us
          </button>
        </div>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute top-full left-0 w-full bg-black/95 flex flex-col items-center py-8 space-y-6 md:hidden transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {links.map((link, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(link)}
            className={`text-lg ${
              active === link ? "text-[#d4af7a]" : "text-white"
            }`}
          >
            {formatText(link)}
          </button>
        ))}

        <button
          onClick={() => scrollToSection("#contact")}
          className="px-8 py-3 bg-[#d4af7a] text-black w-3/4 rounded-md"
        >
          Consult Us
        </button>
      </div>
    </nav>
  );
}