import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ContactSection from "./components/contactSection";
import PreciousMoments from "./components/PreciousMoments";
import WhyChoose from "./components/WhyChoose";
import ImageCube from "./components/PremiumCollage";
import  DestinationsSection from './components/DestinationsSection'
import PremiumCollage from "./components/PremiumCollage";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: "vertical", 
      gestureDirection: "vertical", 
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-dark text-white min-h-screen selection:bg-gold selection:text-dark">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <PreciousMoments/>
          <ContactSection/>
          <Services />
          <WhyChoose/>
          <PremiumCollage/>
          <Gallery />
          < DestinationsSection/>
          <Stats />
          <Testimonials />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
