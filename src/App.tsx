import React, { useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import ReadyToTransform from './components/ReadyToTransform';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import './animations.css';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Set up intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all animatable elements
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <FAQ />
        <ReadyToTransform />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;