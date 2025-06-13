import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-32">
      {/* Dynamic breathing background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-teal-900/20 animate-breathe"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] animate-breathe-slow"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(20,184,166,0.1)_0%,transparent_50%)] animate-breathe-reverse"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-on-scroll opacity-0 translate-y-8 blur-sm">
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
            <span className="text-xs font-light text-blue-400 tracking-wide">2025</span>
            <span className="mx-2 text-gray-500">•</span>
            <span className="text-xs font-light text-gray-300 tracking-wide">Next-Gen AI Studio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-white">AI-Driven Success</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Redefining the Future.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl font-light text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Creating latest solutions that redefine innovation.
            <br />
            Stay ahead with AI-powered technology for the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="glass-button px-8 py-4 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm font-light tracking-wide hover:bg-white/20 transition-all duration-300">
              Connect With Us
            </button>
            <button className="glass-button px-8 py-4 bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-400/30 rounded-lg backdrop-blur-sm font-light tracking-wide hover:from-blue-600/30 hover:to-teal-600/30 transition-all duration-300">
              What is Nubien?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;