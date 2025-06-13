import React from 'react';
import { Target, Zap, Shield, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Every solution is crafted with meticulous attention to detail and cutting-edge technology.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Our AI systems deliver results at unprecedented speed without compromising quality.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built with bank-level security protocols to protect your most sensitive data.'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Solutions designed to scale seamlessly across any market or industry worldwide.'
    }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-8 blur-sm">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide">
            About Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Vision</span>
          </h2>
          <p className="text-lg font-light text-gray-400 max-w-3xl mx-auto leading-relaxed tracking-wide">
            We are pioneers in artificial intelligence, dedicated to transforming businesses through innovative automation solutions that drive unprecedented growth and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 blur-sm glass-card p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed tracking-wide">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;