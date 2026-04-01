import { Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-[#08080a] pt-20 pb-10 border-t border-white/5"
      id="contact"
    >
      <div className="container mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-wider text-gold mb-6">
              EVENT INDIAS
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Curating luxury experiences and unforgettable moments with
              impeccable precision and world-class design.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-medium mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-1" />
                Gurugram, Haryana 122002
              </li>
              <li>info@eventindias.com</li>
              <li>+91 98765 43210</li>
              <li>Mumbai | Delhi | Dubai</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-medium mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-gold">Home</a></li>
              <li><a href="#services" className="hover:text-gold">Services</a></li>
              <li><a href="#gallery" className="hover:text-gold">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-gold">Reviews</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-medium mb-6">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <FaInstagram className="cursor-pointer hover:text-gold" />
              <FaFacebook className="cursor-pointer hover:text-gold" />
              <FaTwitter className="cursor-pointer hover:text-gold" />
              <Mail className="cursor-pointer hover:text-gold" />
            </div>
          </div>

          {/* 🌍 GLOBE */}
          <div className="flex justify-center items-center">
            <a
              href="https://www.google.com/maps?q=Gurugram,Haryana"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              {/* Globe */}
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border border-white/10 relative">
                
                {/* rotating earth */}
                <div className="absolute inset-0 animate-spin-slow">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"
                    className="w-[200%] h-full object-cover"
                  />
                </div>

                {/* overlay glow */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* pin */}
                <div className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full absolute top-0"></div>
                </div>
              </div>

              {/* hover text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 rounded-full transition">
                <span className="text-white text-xs">Open Map</span>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 uppercase tracking-widest">
          <p>
            © {new Date().getFullYear()} Event Indias. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>

      </div>

      {/* 🔥 ANIMATION */}
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
      `}</style>
    </footer>
  );
}