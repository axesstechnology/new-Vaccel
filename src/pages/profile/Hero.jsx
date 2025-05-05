import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-primary-900/95" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-24 pb-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary-500 to-accent blur-2xl opacity-20 animate-pulse"></div>
            <img
              src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="w-48 h-48 mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 relative z-10"
            />
          </div>
          
          <h1 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            We Don't Just Build Software — 
            <span className="block mt-2 bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
              We Orchestrate Digital Masterpieces.
            </span>
          </h1>
          
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Why juggle multiple vendors for UI, backend, and deployment? Think of us as your tech orchestra — with frontend, backend, DevOps, and AI playing in sync.
          </p>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-primary-800 rounded-lg font-medium hover:shadow-lg hover:shadow-accent/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              Let's Build Your Digital Symphony
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-medium hover:bg-white/20 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDownCircle className="w-10 h-10 text-accent hover:text-accent-light transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default Hero;