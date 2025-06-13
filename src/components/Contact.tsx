import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="animate-on-scroll opacity-0 translate-y-8 blur-sm">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-wide">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Touch</span>
            </h2>
            <p className="text-lg font-light text-gray-400 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Ready to transform your business with AI? Let's discuss your project and explore the possibilities.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center glass-card bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-lg flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-semibold tracking-wide">Call Us</p>
                <p className="text-gray-400 font-light tracking-wide">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center glass-card bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-semibold tracking-wide">Email Us</p>
                <p className="text-gray-400 font-light tracking-wide">hello@aistudio.com</p>
              </div>
            </div>

            <div className="flex items-center glass-card bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-lg flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-semibold tracking-wide">Visit Us</p>
                <p className="text-gray-400 font-light tracking-wide">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;