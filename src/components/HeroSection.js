import React, { useState, useEffect } from 'react';
import { ArrowRight, Instagram, Linkedin, Globe } from 'lucide-react';
import { photographerInfo } from '../mock';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1920&q=80", // Food photography
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80", // Product photography
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80", // Food styling
    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&q=80", // Coffee products
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container-artworld relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h1 className="hero-title text-white mb-4">
                {photographerInfo.name}
              </h1>
              <h2 className="artist-name text-2xl mb-6">
                {photographerInfo.title}
              </h2>
            </div>
            
            <p className="body-text text-gray-200 max-w-xl leading-relaxed">
              {photographerInfo.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="btn-primary group"
              >
                Portfolyoyu Incele
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-inverse"
              >
                İletişime Geç
              </button>
            </div>
          </div>

          {/* Right Content - Featured Image */}
          
          
        </div>
      </div>

      {/* Social Links - Vertical */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col items-center space-y-6">
          {/* Top Line */}
          <div className="w-px h-20 bg-accent/50"></div>
          
          {/* Social Icons */}
          <div className="flex flex-col space-y-4">
            <a
              href={photographerInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors duration-200 hover:scale-110 transform"
            >
              <Instagram size={20} />
            </a>
            <a
              href={photographerInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={photographerInfo.socialLinks.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors duration-200 hover:scale-110 transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
            </a>
          </div>
          
          {/* Bottom Line */}
          <div className="w-px h-20 bg-accent/50"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;