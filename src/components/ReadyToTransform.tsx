import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

const ReadyToTransform = () => {
  return (
    <section className="py-40 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-on-scroll opacity-0 translate-y-8 blur-sm">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide">
            Ready To Transform
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Your Business?
            </span>
          </h2>
          <p className="text-lg font-light text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Let's discuss how AI can revolutionize your operations and drive unprecedented growth for your company.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="glass-button px-8 py-4 bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-400/30 rounded-lg backdrop-blur-sm font-light tracking-wide hover:from-blue-600/30 hover:to-teal-600/30 transition-all duration-300">
              Book A Call
            </button>
            <button className="glass-button px-8 py-4 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm font-light tracking-wide hover:bg-white/20 transition-all duration-300">
              Chat With Our Bot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToTransform;