import React from 'react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#08080a] text-white">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-heading leading-tight mb-6">
            Best Wedding & Event Management Company <br />
            <span className="text-yellow-400">In Delhi NCR</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            We specialize in luxury weddings, corporate events, and private celebrations.
            With over 20+ years of experience, we craft unforgettable moments with precision,
            creativity, and elegance.
          </p>

          <p className="text-gray-400 leading-relaxed">
            From concept to execution, our expert team ensures every detail is handled
            seamlessly to deliver a world-class experience.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-xl">
          
          <h3 className="text-lg text-center text-yellow-400 tracking-[0.2em] mb-8">
            LET'S PLAN YOUR CELEBRATION
          </h3>

          <form className="space-y-6">

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-white/20 focus:border-yellow-400 outline-none py-3 placeholder-gray-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-white/20 focus:border-yellow-400 outline-none py-3 placeholder-gray-500"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full bg-transparent border-b border-white/20 focus:border-yellow-400 outline-none py-3 placeholder-gray-500"
            />

            {/* Message */}
            <textarea
              rows="3"
              placeholder="Tell us about your event..."
              className="w-full bg-transparent border-b border-white/20 focus:border-yellow-400 outline-none py-3 placeholder-gray-500 resize-none"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full mt-6 py-3 rounded-full bg-yellow-400 text-black font-semibold tracking-wider 
              hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              SEND MESSAGE
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}