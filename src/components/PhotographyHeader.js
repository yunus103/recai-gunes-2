import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const PhotographyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-black/20'
      }`}
    >
      <div className="container-artworld">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="artist-name cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Recai Güneş
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { label: 'Ana Sayfa', id: 'home' },
              { label: 'Hakkında', id: 'about' },
              { label: 'Portfolyo', id: 'portfolio' },
              { label: 'Hizmetler', id: 'services' },
              { label: 'İletişim', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link text-white hover:text-accent transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-accent transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="glass rounded-lg mt-4 p-6">
            <div className="flex flex-col space-y-4">
              {[
                { label: 'Ana Sayfa', id: 'home' },
                { label: 'Hakkında', id: 'about' },
                { label: 'Portfolyo', id: 'portfolio' },
                { label: 'Hizmetler', id: 'services' },
                { label: 'İletişim', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link text-white hover:text-accent transition-colors duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default PhotographyHeader;